use mathcore::digits;

#[test]
fn zero_takes_one_digit() {
    assert_eq!(digits(0), 1);
}
