import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Heart, ChevronLeft } from 'lucide-react-native';
import { recipes } from '@/data/recipes';
import { colors, spacing, radius } from '@/theme/theme';
import { useFavorites } from '@/context/FavoritesContext';

export default function FavoritesScreen() {
  const router = useRouter();
  const { favorites, toggleFavorite } = useFavorites();

  const favRecipes = recipes.filter((r) => favorites.includes(r.id));

  if (favRecipes.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>علاقه‌مندی‌ها</Text>
        </View>
        <View style={styles.emptyContainer}>
          <Heart size={64} color={colors.border} />
          <Text style={styles.emptyTitle}>هنوز دستور پختی اضافه نکرده‌اید</Text>
          <Text style={styles.emptySubtitle}>
            با لمس قلب روی هر غذا آن را به علاقه‌مندی‌های خود اضافه کنید
          </Text>
          <TouchableOpacity style={styles.browseButton} onPress={() => router.push('/')}>
            <Text style={styles.browseButtonText}>کشف غذاها</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>علاقه‌مندی‌ها</Text>
        <Text style={styles.headerSubtitle}>{favRecipes.length} دستور پخت ذخیره شده</Text>
      </View>
      <FlatList
        data={favRecipes}
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
            </View>
            <TouchableOpacity
              style={styles.favButton}
              onPress={() => toggleFavorite(item.id)}>
              <Heart size={18} color={colors.error} fill={colors.error} />
            </TouchableOpacity>
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
    backgroundColor: colors.primary,
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: spacing.md,
    borderBottomLeftRadius: radius.xl,
    borderBottomRightRadius: radius.xl,
  },
  headerTitle: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: 22,
    color: colors.textLight,
  },
  headerSubtitle: {
    fontFamily: 'Vazirmatn',
    fontSize: 13,
    color: 'rgba(255,255,255,0.85)',
    marginTop: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  emptyTitle: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: 18,
    color: colors.textPrimary,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  emptySubtitle: {
    fontFamily: 'Vazirmatn',
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: spacing.xl,
  },
  browseButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.md,
  },
  browseButtonText: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: 14,
    color: colors.textLight,
  },
  recipeCard: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    marginBottom: spacing.md,
    overflow: 'hidden',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  recipeImage: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
  },
  recipeInfo: {
    flex: 1,
    padding: spacing.sm,
  },
  recipeName: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: 15,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  recipeDesc: {
    fontFamily: 'Vazirmatn',
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  favButton: {
    padding: spacing.md,
  },
});
