'use client';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-primary dark:bg-primary-dark">
      <div className="bg-secondary h-1" style={{ width: `${Math.random() * 100}%` }} />
    </div>
  )
}
