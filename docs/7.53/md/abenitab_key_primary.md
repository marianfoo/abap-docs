  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Internal Tables - Overview](javascript:call_link\('abenitab_oview.htm'\)) →  [Table Key](javascript:call_link\('abenitab_key.htm'\)) → 

Primary Table Keys

Each internal table has a primary table key that enables access to individual rows in the table by means of a key specification.

-   The components of the primary table key are declared using the [UNIQUE*|*NON-UNIQUE KEY](javascript:call_link\('abaptypes_primary_key.htm'\)) additions of the statements [TYPES](javascript:call_link\('abaptypes_primary_key.htm'\)), [DATA](javascript:call_link\('abapdata_primary_key.htm'\)), and so on.

-   The [standard key](javascript:call_link\('abenitab_standard_key.htm'\)), which can be declared both explicitly and implicitly, has a special part to play here.

-   The primary table key of a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") can also be [empty](javascript:call_link\('abenitab_empty_key.htm'\)), meaning that it does not contain any key fields.

-   In the case of key accesses for internal tables, the primary key is always used implicitly [processing statements](javascript:call_link\('abentable_processing_statements.htm'\)) as long as no secondary key is specified. In [table expressions](javascript:call_link\('abentable_expressions.htm'\)), the primary key must also always be specified explicitly.

-   The primary key has the predefined name primary\_key, with which it can also be addressed explicitly in processing statements. In table expressions, primary\_key or an alias name must be specified, if the primary key is to be used explicitly.

-   Access to an internal table using the primary table key is determined by the [table category](javascript:call_link\('abentable_category_glosry.htm'\) "Glossary Entry") and not the table key. For sorted tables and hashed tables, key access is always optimized using the primary table key. Primary key access to standard tables, however, uses a linear search.

-   The key fields of the primary table key of sorted tables and hashed tables are always read-only.

-   In the case of sorted tables and hashed tables, separate key administration exists for the primary table key, which enables optimized access but also affects the [memory requirement](javascript:call_link\('abenitab_key_memory.htm'\)) of the internal table. There is no separate key administration for the primary table key of standard tables.

Notes

-   Since sorted tables and hashed tables have real key administration for the primary key, unlike standard tables, these tables are also grouped under the term [key tables](javascript:call_link\('abenkey_table_glosry.htm'\) "Glossary Entry").

-   To achieve optimized key access to standard tables, [secondary keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") can be used.

Example

Declaration of a hashed table with a unique primary key. The table is filled with data from a database table, read using a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") with values specified for the primary key.

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
[Standard Key](javascript:call_link\('abenitab_standard_key.htm'\))
[Empty Table Key](javascript:call_link\('abenitab_empty_key.htm'\))