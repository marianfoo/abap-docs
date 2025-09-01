---
title: "DDIC - Customizing Includes"
description: |
  A customizing include is a DDIC structure whose name has the prefix CI_ for customers and SI_ for partners and is in the customer namespace. Customizing includes can be included in DDIC structures(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures.htm) and DDIC datab
version: "7.55"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_customizing_includes.htm"
abapFile: "abenddic_customizing_includes.htm"
keywords: ["insert", "do", "if", "data", "abenddic", "customizing", "includes"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Enhancements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_enhancements.htm) → 

DDIC - Customizing Includes

A customizing include is a DDIC structure whose name has the prefix CI\_ for customers and SI\_ for partners and is in the customer namespace. Customizing includes can be included in [DDIC structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures.htm) and [DDIC database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm) delivered by SAP. The customizing includes in DDIC structures and DDIC database tables delivered by SAP are usually empty. They are not associated with existing structures and reserve only the names of the structures. In customer or partner systems, these includes can be enhanced as part of an [enhancement category](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures_enh_cat.htm) in customizing by creating the included customizing includes and using customizing transactions to give them components. Any existing transparent DDIC database tables are not transformed, which can put the fields in different orders in the dictionary and on the database.

A customizing include can be included in multiple DDIC database tables or DDIC structures. Its enhancement is then applied to all DDIC database tables or DDIC structures in which it is included. An empty customizing include of a DDIC database table or DDIC structure does not need to be enhanced.

Enhancements of a delivered DDIC structure or DDIC database table using a customizing include are not modifications. If a customizing include is used to add fields to a DDIC database table or DDIC structure in the standard system, these fields are inserted automatically in the new DDIC structure or DDIC database table delivered by SAP in an upgrade.