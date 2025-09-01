---
title: "DDIC - Help Views"
description: |
  A DDIC help view is a DDIC table view for use in search helps(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensearch_help_glosry.htm 'Glossary Entry'). The selection methods of a search help can be database tables, DDIC database views, and the special help views. DDIC database table
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_help_views.htm"
abapFile: "abenddic_help_views.htm"
keywords: ["select", "do", "if", "case", "try", "method", "data", "abenddic", "help", "views"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_views.htm) →  [DDIC - Table Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_table_views.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Help%20Views%2C%20ABENDDIC_HELP_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Help Views

A DDIC help view is a DDIC table view for use in [search helps](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensearch_help_glosry.htm "Glossary Entry"). The selection methods of a search help can be database tables, DDIC database views, and the special help views. DDIC database tables restrict the search help to one single table and DDIC database views restrict it to inner joins, whereas help views also make outer joins possible. A help view is not created on the database. The structure type defined by a help view can be referenced in ABAP programs using TYPE. A help view cannot, however, be accessed using ABAP SQL.

The join conditions of a DDIC help view must be taken over from existing foreign keys. Tables can be grouped in help views only if they are joined using [foreign keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenforeign_key_glosry.htm "Glossary Entry"). The first table included in the help view is known as the primary table of the help view. The tables added to this primary table using foreign keys are known as secondary tables. The same rules apply to secondary tables of DDIC help views as to secondary tables of [DDIC maintenance views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_maintenance_views.htm).

A DDIC help view implements an outer join, which means that the full content of the primary table of the help view is always displayed. If records in a secondary table cannot be read due to a selection condition, the content of the corresponding fields of the secondary table is displayed with initial values.

Hints

-   Like other views, DDIC help views can be used in elementary search helps if the selection is too complex to be defined using a single database table.
-   Unlike DDIC database views, DDIC help views implement an outer join, which is why this type is particularly well suited for including supplementary information such as explanatory texts from secondary tables. If the supplementary information were missing in an inner join, the complete data set would be excluded from the result set.
-   If the selection is only made using a table and its text table, a DDIC help view is not required. The table can be specified directly as a selection method of the search help, since the fields of the text table are also used as parameters in the search help in this case.
-   Help views should not be used if the selection is often restricted using fields of the secondary tables. In this case, a DDIC database view should be created instead. It might also be necessary to create additional suitable indexes for the basis tables.
-   Selections using help views can only be made quicker by making restrictions on the primary table. When accessing help views from the ABAP runtime framework, special selection routines are generated. These routines always make the selection using the primary table first and then use the records found as a key for selecting the supplementary information.