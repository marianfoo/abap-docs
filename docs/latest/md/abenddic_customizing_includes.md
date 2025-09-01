---
title: "DDIC - Customizing Includes"
description: |
  A customizing include is a DDIC structure whose name has the prefix CI_ for customers and SI_ for partners and is in the customer namespace. SAP-delivered DDIC structures(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) and DDIC database tables(https://h
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_customizing_includes.htm"
abapFile: "abenddic_customizing_includes.htm"
keywords: ["insert", "do", "if", "data", "abenddic", "customizing", "includes"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Customizing%20Includes%2C%20ABENDDIC_CUSTOMIZING_INCLUDES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Customizing Includes

A customizing include is a DDIC structure whose name has the prefix CI\_ for customers and SI\_ for partners and is in the customer namespace. SAP-delivered [DDIC structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) and [DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) may contain customizing includes when delivered. These customizing includes in SAP-delivered objects are usually empty. They are not linked with existing structures, they are only intended to reserve names. In customer or partner systems, these includes can be extended according to the [enhancement category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_enh_cat.htm). This is done by creating the included but empty customizing includes and adding components using customizing transactions. If a customizing include is extended in a transparent DDIC database table, no [adjustment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_adj.htm) takes place. As a result, the order of fields in ABAP Dictionary and on the database might differ.

A customizing include can be included in multiple DDIC database tables or DDIC structures. Its extension is then applied to all DDIC database tables or DDIC structures in which it is included. It is not mandatory to extend an empty customizing include of a DDIC database table or DDIC structure.

Extending an SAP-delivered DDIC structure or DDIC database table using a customizing include does not modify the original object. If a customizing include is used to add fields to a standard DDIC database table or DDIC structure, these fields are inserted automatically into DDIC structures or DDIC database tables delivered by SAP in an upgrade.