import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ChevronLeft, Clock, Flame, Users } from 'lucide-react-native';
import { getRecipesByCategory, getCategoryById } from '@/data/recipes';
import { colors, spacing, radius } from '@/theme/theme';
import { useFavorites } from '@/context/FavoritesContext';
import { Heart } from 'lucide-react-native';

export default function CategoryScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const category = getCategoryById(id || '');
  const recipeList = getRecipesByCategory(id || '');
  const { isFavorite } = useFavorites();

  return (
    <View style={styles.container}>
      {/* Header with category image */}
      <View style={styles.header}>
        <Image source={{ uri: category?.image }} style={styles.headerImage} />
        <View style={styles.headerOverlay} />
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <ChevronLeft size={24} color={colors.textLight} />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>{category?.name}</Text>
            <Text style={styles.headerSubtitle}>{recipeList.length} دستور پخت</Text>
          </View>
        </View>
      </View>

      {/* Recipe List */}
      <FlatList
        data={recipeList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: spacing.md, paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.recipeCard}
            onPress={() => router.push(`/recipe/${item.id}`)}>
            <Image source={{ uri: item.image }} style={styles.recipeImage} />
            <View style={styles.recipeInfo}>
              <Text style={styles.recipeName}>{item.name}</Text>
              <Text style={styles.recipeDesc} numberOfLines={2}>{item.description}</Text>
              <View style={styles.recipeMeta}>
                <View style={styles.metaItem}>
                  <Clock size={13} color={colors.primary} />
                  <Text style={styles.metaText}>{item.cookTime}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Flame size={13} color={colors.primary} />
                  <Text style={styles.metaText}>{item.difficulty}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Users size={13} color={colors.primary} />
                  <Text style={styles.metaText}>{item.servings} نفر</Text>
                </View>
              </View>
            </View>
            {isFavorite(item.id) && (
              <View style={styles.favBadge}>
                <Heart size={14} color={colors.error} fill={colors.error} />
              </View>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    height: 200,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  headerContent: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    paddingTop: 50,
    paddingHorizontal: spacing.md,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextContainer: {
    position: 'absolute',
    bottom: 20,
    right: spacing.md,
    left: spacing.md,
  },
  headerTitle: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: 24,
    color: colors.textLight,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontFamily: 'Vazirmatn',
    fontSize: 14,
    color: 'rgba(255,255,255,0.85)',
  },
  recipeCard: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    marginBottom: spacing.md,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  recipeImage: {
    width: 110,
    height: '100%',
    resizeMode: 'cover',
  },
  recipeInfo: {
    flex: 1,
    padding: spacing.sm,
  },
  recipeName: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: 16,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  recipeDesc: {
    fontFamily: 'Vazirmatn',
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
    marginBottom: 8,
  },
  recipeMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  favBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
