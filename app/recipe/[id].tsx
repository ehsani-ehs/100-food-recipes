import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Share } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ChevronLeft, Clock, Flame, Users, Heart, Share2, ChefHat } from 'lucide-react-native';
import { getRecipeById, getCategoryById } from '@/data/recipes';
import { colors, spacing, radius } from '@/theme/theme';
import { useFavorites } from '@/context/FavoritesContext';

export default function RecipeDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const recipe = getRecipeById(id || '');
  const category = recipe ? getCategoryById(recipe.categoryId) : undefined;
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>دستور پخت یافت نشد</Text>
      </View>
    );
  }

  const fav = isFavorite(recipe.id);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `دستور پخت ${recipe.name}\n\n${recipe.description}`,
      });
    } catch (e) {
      // ignore
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Hero Image */}
      <View style={styles.heroContainer}>
        <Image source={{ uri: recipe.image }} style={styles.heroImage} />
        <View style={styles.heroOverlay} />
        <View style={styles.heroButtons}>
          <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
            <ChevronLeft size={22} color={colors.textLight} />
          </TouchableOpacity>
          <View style={styles.heroButtonsRight}>
            <TouchableOpacity style={styles.iconButton} onPress={handleShare}>
              <Share2 size={20} color={colors.textLight} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => toggleFavorite(recipe.id)}>
              <Heart size={20} color={fav ? colors.error : colors.textLight} fill={fav ? colors.error : 'none'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.heroTitleContainer}>
          <Text style={styles.heroCategory}>{category?.name}</Text>
          <Text style={styles.heroTitle}>{recipe.name}</Text>
        </View>
      </View>

      {/* Info Cards */}
      <View style={styles.infoRow}>
        <View style={styles.infoCard}>
          <Clock size={20} color={colors.primary} />
          <Text style={styles.infoLabel}>آماده‌سازی</Text>
          <Text style={styles.infoValue}>{recipe.prepTime}</Text>
        </View>
        <View style={styles.infoCard}>
          <Flame size={20} color={colors.primary} />
          <Text style={styles.infoLabel}>پخت</Text>
          <Text style={styles.infoValue}>{recipe.cookTime}</Text>
        </View>
        <View style={styles.infoCard}>
          <Users size={20} color={colors.primary} />
          <Text style={styles.infoLabel}>نفرات</Text>
          <Text style={styles.infoValue}>{recipe.servings} نفر</Text>
        </View>
        <View style={styles.infoCard}>
          <ChefHat size={20} color={colors.primary} />
          <Text style={styles.infoLabel}>سختی</Text>
          <Text style={styles.infoValue}>{recipe.difficulty}</Text>
        </View>
      </View>

      {/* Description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>درباره غذا</Text>
        <Text style={styles.description}>{recipe.description}</Text>
      </View>

      {/* Ingredients */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>مواد لازم</Text>
        <View style={styles.ingredientsContainer}>
          {recipe.ingredients.map((ing, idx) => (
            <View key={idx} style={styles.ingredientRow}>
              <View style={styles.ingredientBullet} />
              <Text style={styles.ingredientText}>{ing}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Steps */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>طرز تهیه</Text>
        {recipe.steps.map((step, idx) => (
          <View key={idx} style={styles.stepRow}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{idx + 1}</Text>
            </View>
            <Text style={styles.stepText}>{step}</Text>
          </View>
        ))}
      </View>

      {/* Favorite Button */}
      <TouchableOpacity
        style={[styles.favButton, fav && styles.favButtonActive]}
        onPress={() => toggleFavorite(recipe.id)}>
        <Heart size={20} color={fav ? colors.textLight : colors.primary} fill={fav ? colors.textLight : 'none'} />
        <Text style={[styles.favButtonText, fav && styles.favButtonTextActive]}>
          {fav ? 'از علاقه‌مندی‌ها حذف کنید' : 'به علاقه‌مندی‌ها اضافه کنید'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  heroContainer: {
    height: 280,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  heroButtons: {
    position: 'absolute',
    top: 50,
    left: spacing.md,
    right: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heroButtonsRight: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroTitleContainer: {
    position: 'absolute',
    bottom: 20,
    right: spacing.md,
    left: spacing.md,
  },
  heroCategory: {
    fontFamily: 'Vazirmatn',
    fontSize: 13,
    color: colors.accent,
    marginBottom: 4,
  },
  heroTitle: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: 26,
    color: colors.textLight,
  },
  infoRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing.md,
    marginTop: -20,
    gap: spacing.sm,
  },
  infoCard: {
    flex: 1,
    minWidth: '47%',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  infoLabel: {
    fontFamily: 'Vazirmatn',
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 6,
    marginBottom: 2,
  },
  infoValue: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: 13,
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
    marginBottom: spacing.sm,
  },
  description: {
    fontFamily: 'Vazirmatn',
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  ingredientsContainer: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
  },
  ingredientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  ingredientBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginRight: spacing.sm,
  },
  ingredientText: {
    flex: 1,
    fontFamily: 'Vazirmatn',
    fontSize: 14,
    color: colors.textPrimary,
  },
  stepRow: {
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0,
    marginRight: spacing.sm,
    marginTop: 2,
  },
  stepNumberText: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: 13,
    color: colors.textLight,
  },
  stepText: {
    flex: 1,
    fontFamily: 'Vazirmatn',
    fontSize: 14,
    color: colors.textPrimary,
    lineHeight: 24,
  },
  favButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: spacing.md,
    marginTop: spacing.lg,
    paddingVertical: 14,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.primary,
    gap: spacing.sm,
  },
  favButtonActive: {
    backgroundColor: colors.primary,
  },
  favButtonText: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: 14,
    color: colors.primary,
  },
  favButtonTextActive: {
    color: colors.textLight,
  },
});
