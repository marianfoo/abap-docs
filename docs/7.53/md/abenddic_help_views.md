  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_views.htm) →  [Classic Views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_views.htm) → 

Help Views

A help view is a special view for use in [search helps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensearch_help_glosry.htm "Glossary Entry"). The selection methods of a search help can be database tables, database views, and the special help views. Database tables restrict the search help to one table and database views restrict it to inner joins, whereas help views also make outer joins possible. A help view is not defined on the database. The structure type defined using a help view can be referenced in ABAP programs using TYPE. A help view cannot, however, be accessed using ABAP SQL.

The join conditions of a help view must be applied from existing foreign keys. Tables can be grouped in help views only if they are joined using [foreign keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenforeign_key_glosry.htm "Glossary Entry"). The first table included in the help view is known as the primary table of the help view. The tables added to this primary table using foreign keys are known as secondary tables. The same restrictions apply when selecting secondary tables of a help view as to [maintenance views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_maintenance_views.htm).

A help view implements an outer join, which means that the full content of the primary table of the help view is always displayed. If records in a secondary table cannot be read due to a selection condition, the content of the corresponding fields of the secondary table are displayed with initial values.

Notes

-   Like other views, help views can be used in elementary search helps if the selection is too complex to be defined using a single database table.

-   Unlike database views, help views implement an outer join, which is why this type is particularly well suited for including supplementary information such as explanatory texts from secondary tables. If the supplementary information were missing in an inner join, no part of the dataset would be selected.

-   If the selection is only made using a table and its text table, it is enough to specify the table directly as a selection method of the search help, since the fields of the text table can also be used as parameters in the search help in this case.

-   Help views should not be used if the selection is often restricted using fields of the secondary tables. In this case, a database view should be created instead. It might also be necessary to create additional suitable indexes for the basis tables.

-   Selections using help views can only be made quicker by making restrictions on the primary table. When accessing help views from the ABAP runtime environment, special selection routines are generated. These routines always make the selection using the primary table first and then use the records found as a key for selecting the supplementary information.