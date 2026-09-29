import { useState, useMemo } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Search, Clock, Flame } from 'lucide-react-native';
import { categories, recipes, searchRecipes } from '@/data/recipes';
import { colors, spacing, radius } from '@/theme/theme';
import { useFavorites } from '@/context/FavoritesContext';
import { Heart } from 'lucide-react-native';

export default function HomeScreen() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const { isFavorite } = useFavorites();

  const searchResults = useMemo(() => searchRecipes(query), [query]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.appTitle}>۱۰۰ دستور پخت غذا</Text>
          <Text style={styles.appSubtitle}>بهترین غذاهای جهان را کشف کنید</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color={colors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="جستجوی غذا..."
            placeholderTextColor={colors.textSecondary}
            value={query}
            onChangeText={setQuery}
            textAlign="right"
          />
        </View>
      </View>

      {query.trim() ? (
        /* Search Results */
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>نتایج جستجو ({searchResults.length})</Text>
          {searchResults.length === 0 ? (
            <Text style={styles.emptyText}>نتیجه‌ای یافت نشد</Text>
          ) : (
            <FlatList
              data={searchResults}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.searchCard}
                  onPress={() => router.push(`/recipe/${item.id}`)}>
                  <Image source={{ uri: item.image }} style={styles.searchImage} />
                  <View style={styles.searchInfo}>
                    <Text style={styles.searchName}>{item.name}</Text>
                    <Text style={styles.searchDesc} numberOfLines={2}>{item.description}</Text>
                  </View>
                  {isFavorite(item.id) && <Heart size={16} color={colors.error} fill={colors.error} />}
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      ) : (
        <>
          {/* Categories */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>دسته‌بندی‌ها</Text>
            <View style={styles.categoriesGrid}>
              {categories.map((cat) => (
                <TouchableOpacity
                  key={cat.id}
                  style={styles.categoryCard}
                  onPress={() => router.push(`/category/${cat.id}`)}>
                  <Image source={{ uri: cat.image }} style={styles.categoryImage} />
                  <View style={[styles.categoryOverlay, { backgroundColor: cat.color + 'CC' }]} />
                  <View style={styles.categoryTextContainer}>
                    <Text style={styles.categoryName}>{cat.name}</Text>
                    <Text style={styles.categoryDesc}>{cat.description}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Popular Recipes */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>پیشنهادهای ویژه</Text>
            <FlatList
              data={recipes.slice(0, 6)}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: spacing.md }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.featuredCard}
                  onPress={() => router.push(`/recipe/${item.id}`)}>
                  <Image source={{ uri: item.image }} style={styles.featuredImage} />
                  <View style={styles.featuredInfo}>
                    <Text style={styles.featuredName} numberOfLines={1}>{item.name}</Text>
                    <View style={styles.featuredMeta}>
                      <View style={styles.metaItem}>
                        <Clock size={12} color={colors.textSecondary} />
                        <Text style={styles.metaText}>{item.cookTime}</Text>
                      </View>
                      <View style={styles.metaItem}>
                        <Flame size={12} color={colors.textSecondary} />
                        <Text style={styles.metaText}>{item.difficulty}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    paddingTop: 50,
    paddingBottom: 24,
    paddingHorizontal: spacing.lg,
    borderBottomLeftRadius: radius.xl,
    borderBottomRightRadius: radius.xl,
  },
  headerContent: {
    alignItems: 'center',
  },
  appTitle: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: 26,
    color: colors.textLight,
    marginBottom: 4,
  },
  appSubtitle: {
    fontFamily: 'Vazirmatn',
    fontSize: 14,
    color: 'rgba(255,255,255,0.85)',
  },
  searchContainer: {
    paddingHorizontal: spacing.md,
    marginTop: -16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Vazirmatn',
    fontSize: 15,
    marginRight: spacing.sm,
    color: colors.textPrimary,
  },
  section: {
    paddingHorizontal: spacing.md,
    marginTop: spacing.lg,
  },
  sectionTitle: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: 18,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    height: 140,
    borderRadius: radius.lg,
    marginBottom: spacing.md,
    overflow: 'hidden',
    position: 'relative',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoryOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
  },
  categoryTextContainer: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    padding: spacing.sm,
  },
  categoryName: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: 15,
    color: colors.textLight,
    marginBottom: 2,
  },
  categoryDesc: {
    fontFamily: 'Vazirmatn',
    fontSize: 11,
    color: 'rgba(255,255,255,0.9)',
  },
  featuredCard: {
    width: 200,
    marginRight: spacing.md,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  featuredImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  featuredInfo: {
    padding: spacing.sm,
  },
  featuredName: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: 14,
    color: colors.textPrimary,
    marginBottom: 6,
  },
  featuredMeta: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontFamily: 'Vazirmatn',
    fontSize: 11,
    color: colors.textSecondary,
  },
  searchCard: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    marginBottom: spacing.sm,
    padding: spacing.sm,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  searchImage: {
    width: 70,
    height: 70,
    borderRadius: radius.sm,
    resizeMode: 'cover',
  },
  searchInfo: {
    flex: 1,
    marginRight: spacing.sm,
    marginLeft: spacing.sm,
  },
  searchName: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: 15,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  searchDesc: {
    fontFamily: 'Vazirmatn',
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  emptyText: {
    fontFamily: 'Vazirmatn',
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingVertical: spacing.lg,
  },
});
