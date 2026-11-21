mod test;

use test::security_tester::SecurityTester;

fn main() {
    println!("\nSpring Boot Security Tester");
    println!("=============================");
    
    let args: Vec<String> = std::env::args().collect();
    let base_url = if args.len() > 1 {
        args[1].clone()
    } else {
        "http://localhost".to_string()
    };
   
    println!("Testing application through Nginx API gateway at: {}", base_url);
    
    let tester = SecurityTester::new(&base_url);
    tester.test_all();
}