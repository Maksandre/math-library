/// How many digits a number takes when written out.
pub fn digits(value: u64) -> usize {
    itoa::Buffer::new().format(value).len()
}
