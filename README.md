# 🔐 UJ License Manager

Description

UJ License Manager is a powerful and easy-to-use FiveM script designed for the QBCore / qbox Framework. It allows police officers (grade 4 or higher) and admins to manage player licenses with simple commands. This script provides a streamlined way to grant or revoke licenses, directly modifying player metadata in your database.

## 🚀 Key Features:

- Grant and Revoke Licenses: Easily assign or remove licenses from players with two intuitive commands: /grantlicense and /revokelicense.

- Permission-Based Access: Only police (grade 4+) or admins can use the commands, ensuring security and proper use of the system.

- Database Integration: License changes are immediately reflected in the player’s metadata and saved in your database.

- Modern Notifications: Utilizes ox_lib notifications to give users clean, non-intrusive feedback, replacing traditional chat messages for a more polished experience.

- Fully Customizable: Supports multiple license types such as driver, weapon, hunting, and more—customize as needed.

- Whether you're running a roleplay server, a law enforcement-focused community, or just need a simple way to manage licenses, UJ License Manager is the perfect tool for the job.

## How It Works:

- Admins or police officers with grade 4+ can execute the /grantlicense and /revokelicense commands to adjust player licenses.

- The script interacts with player metadata stored in the database, ensuring that license status is always up-to-date and available for your server’s needs.

## 🧱 Requirements

- [QBCore Framework](https://github.com/qbcore-framework/qb-core) or [Qbox Framework](https://github.com/Qbox-project)
- [oxmysql](https://github.com/overextended/oxmysql)
- [ox_lib](https://github.com/overextended/ox_lib)

> ⚠️ Ensure `ox_lib` is started **before** this resource in your `server.cfg`:
```cfg
ensure ox_lib
ensure qbcore /qbox
ensure uj-licensemanager 
