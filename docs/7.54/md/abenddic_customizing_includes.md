---
title: "Customizing Includes"
description: |
  A customizing include is a structure in ABAP Dictionary whose name has the prefix CI_ for customers and SI_ for partners and is in the customer namespace. Customizing includes can be included in structures(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures.htm) and d
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_customizing_includes.htm"
abapFile: "abenddic_customizing_includes.htm"
keywords: ["insert", "do", "if", "class", "data", "abenddic", "customizing", "includes"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_enhancements.htm) → 

Customizing Includes

A customizing include is a structure in ABAP Dictionary whose name has the prefix CI\_ for customers and SI\_ for partners and is in the customer namespace. Customizing includes can be included in [structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures.htm) and [database tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables.htm) delivered by SAP. The customizing includes in structures and database tables delivered by SAP are usually empty. They are not associated with existing structures and reserve only the names of the structures. In customer or partner systems, these includes can be enhanced as part of an [enhancement category](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures_enh_cat.htm) in customizing by creating the included customizing includes and using customizing transactions to give them components. Any existing transparent database tables are not transformed, which can put the fields in different orders in the dictionary and on the database.

A customizing include can be included in multiple database tables or structures. Its enhancement is then applied to all database tables or structures in which it is included. An empty customizing include of a database table or structure does not need to be enhanced.

Enhancements of a delivered structure or database table using a customizing include are not modifications. If a customizing include is used to add fields to a database table or structure in the standard system, these fields are inserted automatically in the new structure or database table delivered by SAP in an upgrade.