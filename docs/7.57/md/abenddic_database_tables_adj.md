  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Adjusting Database Tables, ABENDDIC_DATABASE_TABLES_ADJ, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Adjusting Database Tables

When an existing modified DDIC database table is activated, existing content must be adjusted on the database in the following cases:

-   When a [client column](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_column_glosry.htm "Glossary Entry") is inserted. Here, the data of the table is copied to all clients listed in the client table T000.
-   When fields of existing DDIC database tables are deleted. Rows can be lost when key fields are deleted.
-   When fields of existing DDIC database tables are renamed. The field with the old name is deleted and a field with the new name is appended. This leads to the loss of the data in column with the old field name.
-   Changing the Technical Properties of Table Fields

Hints

-   The order of table fields in transparent tables in the ABAP Dictionary may be different from the order of the columns of the physical database table on the database, which means that not every modification here requires an adjustment.
-   In adjustments, initial fields are not given the null value and are given their type-dependent initial value instead, regardless of the [flag for initial values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_init.htm).
-   For more information, see Adjustment of Database Structures.