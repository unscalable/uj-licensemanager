# 🔐 UJ License Manager

## Description

**UJ License Manager** is a powerful and easy-to-use FiveM script designed for the **QBCore** or **Qbox** Framework. It provides law enforcement officers and administrators the ability to manage player licenses directly via a modern UI interface and intuitive command.

Whether you're running a roleplay server or a law enforcement-focused community, this tool makes managing licenses simple and efficient.

---

## 🚀 Key Features

- ✅ **Grant and Revoke Licenses**  
  Use the interactive UI or simple commands to manage licenses like `driver`, `weapon`, or `hunting`.

- 🔐 **Permission-Based Access**  
  Only players with the **police job (grade 4+)** or those in the **admin group** can open and use the license manager.

- 🧠 **Smart UI Access**  
  The `/managelicense` command checks job and permissions before opening the NUI interface.

- 💾 **Database Integration**  
  License changes are saved to the database and reflected in real-time using metadata updates.

- 🔔 **Clean Notifications**  
  Leverages `ox_lib` to send professional, non-intrusive alerts and messages.

- 🛠️ **Customizable License Types**  
  Driver, Weapon, Hunting, and more—fully customizable to match your server's needs.

- 🔄 **Radial Menu Integration**  
  Allows for opening the License Manager interface through a radial menu, giving users more flexibility.

---

## 🧩 How It Works

- Players with the **police job (grade ≥ 4)** or in the **admin permission group** can use the `/managelicense` command.
- A NUI interface opens, allowing the user to choose:
  - Player ID
  - License Type
  - Action (Grant or Revoke)
- The script sends data to the server which:
  - Verifies permissions again for security
  - Updates the license metadata
  - Saves changes to the database
- Players are notified of actions via `ox_lib`.

---

## 🔄 Radial Menu Integration:

If you want to open the License Manager UI via the **radial menu** instead of using the command, you can integrate it as follows:

1. **Ensure Radial Menu Support**:  
   You must have a radial menu system already set up in your server. This is typically handled through a custom script or a community resource like `qb-radialmenu`.

2. **Add a Custom Option**:  
   Add the following client-side code to bind the radial menu button to open the UJ License Manager UI:

   ```lua
   -- Radial Menu Integration
   RegisterNetEvent('uj_licensemanager:openRadialUI', function()
       SetNuiFocus(true, true)
       SendNUIMessage({ action = "openUI" })
   end)

   -- Assuming radial menu is set up, link this to the radial option
   -- Example: Trigger the radial event when the corresponding radial menu option is selected
   RegisterCommand('openLicenseManagerRadial', function()
       TriggerEvent('uj_licensemanager:openRadialUI')
   end) ```


## 📦 Requirements

- [QBCore Framework](https://github.com/qbcore-framework/qb-core) **or** [Qbox Framework](https://github.com/Qbox-project)
- [oxmysql](https://github.com/overextended/oxmysql)
- [ox_lib](https://github.com/overextended/ox_lib)

> ⚠️ **Important:** Make sure `ox_lib` is started **before** this resource in your `server.cfg`:
```cfg
ensure ox_lib
ensure qb-core / qbox
ensure uj-licensemanager
