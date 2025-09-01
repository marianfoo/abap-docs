---
title: "Append Views"
description: |
  Database views(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_views.htm) delivered by SAP can be enhanced by partners and customers using views known as append views, without making any modifications. The name of an append view is subject to the same rules as the name
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_append_views.htm"
abapFile: "abenddic_append_views.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "abenddic", "append", "views"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_enhancements.htm) → 

Append Views

[Database views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_views.htm) delivered by SAP can be enhanced by partners and customers using views known as append views, without making any modifications. The name of an append view is subject to the same rules as the name of a classic [view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_views.htm) and should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

Further fields from basis tables in the database view can be added to append views as view fields. Append views cannot be used to add further basis tables to the view or to modify the join conditions or selection conditions of a database view. An append view is assigned to exactly one database view. More than one append view can be created for a database view.

When an append view is activated, an [append structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenappend_structure_glosry.htm "Glossary Entry") with this name is created in ABAP Dictionary and its components become the additional view fields of the append view.

If a database view is activated, all append views for this view are found and their fields are appended to the database view. The append structure of the append view is added to the structure of the database view. If an append view is created or modified, the associated database view is adjusted to this change automatically when the append view is activated.

Notes

-   Append views are possible only for database views and not for other [views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_views.htm).

-   In the case of [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS view enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_extend_glosry.htm "Glossary Entry") are a separate option for enhancements and work in the similar way to append views. When a CDS view enhancement is created, an append view is created that enhances the [CDS database view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_database_view_glosry.htm "Glossary Entry").

Example

The database view DEMO\_ORIGINAL is enhanced using the append view DEMO\_APPEND\_VIEW. The program DEMO\_APPEND\_VIEW uses [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) to access the enhanced view and also displays the components of the structures in question.