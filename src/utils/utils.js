export default function renameDays(day) {
   switch (day.toLowerCase()) {
      case 'понедельник':
         return 'ПН'
      case 'вторник':
         return 'ВТ'
      case 'среда':
         return 'СР'
      case 'четверг':
         return 'ЧТ'
      case 'пятница':
         return 'ПТ'
      case 'суббота':
         return 'СБ'
      case 'воскресение':
         return 'ВС'
      default:
         return 'xxx'
   }
}