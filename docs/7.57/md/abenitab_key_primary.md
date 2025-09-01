  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_oview.htm) →  [itab - Table Key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_key.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Primary Table Key, ABENITAB_KEY_PRIMARY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

itab - Primary Table Key

Each internal table has a primary table key that allows access to individual lines of the table by specifying a key.

-   The components of the primary table key are declared using the [UNIQUE*|*NON-UNIQUE KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_primary_key.htm) additions of the statements [TYPES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_primary_key.htm), [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_primary_key.htm), and so on.
-   The [standard key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_standard_key.htm), which can be declared both explicitly and implicitly, has a special role.
-   The primary table key of a [standard table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_table_glosry.htm "Glossary Entry") can also be [empty](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_empty_key.htm), that is, it does not contain any key fields.
-   In the case of key accesses for internal tables, the primary key is always used implicitly in [processing statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_statements.htm) as long as no secondary key is specified. In [table expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expressions.htm), the primary key must also be specified explicitly.
-   The primary key has the predefined name primary\_key, with which it can also be addressed explicitly in processing statements. In table expressions, primary\_key or an alias name must be specified if the primary key is to be used explicitly.
-   Access to an internal table using the primary table key is determined by the [table category](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_category_glosry.htm "Glossary Entry") and not the table key. For sorted tables and hashed tables, key access is always optimized using the primary table key. Primary key access to standard tables, however, performs a linear search.
-   The key fields of the primary table key of sorted tables and hashed tables are always read-only.
-   In the case of sorted tables and hashed tables, separate key administration exists for the primary table key, which enables optimized access but also affects the [memory requirement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_key_memory.htm) of the internal table. There is no separate administration for the primary table key of standard tables.

Hints

-   Since sorted tables and hashed tables have real key administration for the primary key, unlike standard tables, these tables are also grouped under the term [key tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenkey_table_glosry.htm "Glossary Entry").
-   To achieve optimized key access to standard tables, [secondary keys](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") can be used.

Example

Declaration of a hashed table with a unique primary key. The table is filled with data from a database table and accessed using a [table expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry") with values specified for the primary key.

DATA carrid TYPE spfli-carrid VALUE 'LH'.
cl\_demo\_input=>add\_field( CHANGING field = carrid ).
DATA connid TYPE spfli-connid VALUE '0400'.
cl\_demo\_input=>request( CHANGING field = connid ).
DATA spfli\_tab
  TYPE HASHED TABLE OF spfli
       WITH UNIQUE KEY primary\_key COMPONENTS carrid connid.
SELECT \*
       FROM spfli
       INTO TABLE @spfli\_tab.
cl\_demo\_output=>display(
  VALUE #( spfli\_tab\[ KEY primary\_key
                      carrid = carrid
                      connid = connid \] OPTIONAL ) ).

Continue
[itab - Standard Key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_standard_key.htm)
[itab - Empty Table Key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_empty_key.htm)