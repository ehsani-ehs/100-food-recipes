import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ChefHat, Heart, BookOpen, Info } from 'lucide-react-native';
import { colors, spacing, radius } from '@/theme/theme';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.iconCircle}>
          <ChefHat size={48} color={colors.textLight} />
        </View>
        <Text style={styles.appName}>۱۰۰ دستور پخت غذا</Text>
        <Text style={styles.appVersion}>نسخه ۱.۰.۰</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>درباره برنامه</Text>
        <Text style={styles.description}>
          برنامه «۱۰۰ دستور پخت غذا» یک راهنمای کامل برای پخت غذاهای متنوع از سراسر جهان است. این برنامه شامل دستور پخت‌های اصیل ایرانی، فست فودهای محبوب، غذاهای ایتالیایی و صبحانه‌های بین‌المللی می‌باشد.
        </Text>
      </View>

      <View style={styles.featuresContainer}>
        <View style={styles.featureCard}>
          <BookOpen size={28} color={colors.primary} />
          <Text style={styles.featureTitle}>۲۰ دستور پخت</Text>
          <Text style={styles.featureDesc}>در ۴ دسته‌بندی متنوع</Text>
        </View>
        <View style={styles.featureCard}>
          <Heart size={28} color={colors.primary} />
          <Text style={styles.featureTitle}>علاقه‌مندی</Text>
          <Text style={styles.featureDesc}>ذخیره غذاهای دلخواه</Text>
        </View>
        <View style={styles.featureCard}>
          <ChefHat size={28} color={colors.primary} />
          <Text style={styles.featureTitle}>آموزش گام به گام</Text>
          <Text style={styles.featureDesc}>طرز تهیه کامل</Text>
        </View>
        <View style={styles.featureCard}>
          <Info size={28} color={colors.primary} />
          <Text style={styles.featureTitle}>جستجوی آسان</Text>
          <Text style={styles.featureDesc}>پیدا کردن سریع غذا</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>امکانات</Text>
        <View style={styles.listItem}>
          <View style={styles.bullet} />
          <Text style={styles.listText}>دسته‌بندی غذاهای ایرانی، فست فود، ایتالیایی و صبحانه</Text>
        </View>
        <View style={styles.listItem}>
          <View style={styles.bullet} />
          <Text style={styles.listText}>تصاویر باکیفیت و جذاب از هر غذا</Text>
        </View>
        <View style={styles.listItem}>
          <View style={styles.bullet} />
          <Text style={styles.listText}>مواد لازم و طرز تهیه دقیق و گام به گام</Text>
        </View>
        <View style={styles.listItem}>
          <View style={styles.bullet} />
          <Text style={styles.listText}>ذخیره غذاهای مورد علاقه برای دسترسی سریع</Text>
        </View>
        <View style={styles.listItem}>
          <View style={styles.bullet} />
          <Text style={styles.listText}>اشتراک‌گذاری دستور پخت با دوستان</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>ساخته شده با عشق برای عاشقان آشپزی</Text>
        <Text style={styles.footerCopy}>© ۲۰۲۶ - تمام حقوق محفوظ است</Text>
      </View>
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
    paddingBottom: 30,
    alignItems: 'center',
    borderBottomLeftRadius: radius.xl,
    borderBottomRightRadius: radius.xl,
  },
  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  appName: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: 24,
    color: colors.textLight,
  },
  appVersion: {
    fontFamily: 'Vazirmatn',
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 4,
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
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing.md,
    marginTop: spacing.lg,
    gap: spacing.sm,
  },
  featureCard: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  featureTitle: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: 14,
    color: colors.textPrimary,
    marginTop: spacing.sm,
    marginBottom: 4,
  },
  featureDesc: {
    fontFamily: 'Vazirmatn',
    fontSize: 11,
    color: colors.textSecondary,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginLeft: 0,
    marginRight: spacing.sm,
  },
  listText: {
    flex: 1,
    fontFamily: 'Vazirmatn',
    fontSize: 14,
    color: colors.textPrimary,
    lineHeight: 22,
  },
  footer: {
    alignItems: 'center',
    marginTop: spacing.xl,
    paddingHorizontal: spacing.md,
  },
  footerText: {
    fontFamily: 'Vazirmatn-Medium',
    fontSize: 14,
    color: colors.primary,
    marginBottom: 4,
  },
  footerCopy: {
    fontFamily: 'Vazirmatn',
    fontSize: 12,
    color: colors.textSecondary,
  },
});
