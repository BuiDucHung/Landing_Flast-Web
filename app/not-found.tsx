import Link from 'next/link'
import style from './not-found.module.scss'

export default function NotFound() {
  return (
    <div className={style.wrap}>
      <div className={style.illustration}>
        {/* svg như trên */}
      </div>
      <h1 className={style.code}>4<span>0</span>4</h1>
      <h2 className={style.title}>Trang không tồn tại</h2>
      <p className={style.desc}>
        Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.
      </p>
      <Link href="/" className={style.btn}>
        ← Về trang chủ
      </Link>
    </div>
  )
}