  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata.htm) →  [DATA, TABLE OF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_itab.htm) →  [DATA, tabkeys](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_keydef.htm) → 

DATA, key

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_shortref.htm)

Syntax

... *{* *\[*UNIQUE *|* NON-UNIQUE*\]*
      *{* *{*KEY *\[*primary\_key *\[*ALIAS alias\_name*\]* COMPONENTS*\]* comp1 comp2 ...*}*
      *|* *{*DEFAULT KEY*}* *}*  *}*
  *|* *{* EMPTY KEY *}* ...

Alternatives:

[1\. ... *\[*UNIQUE*|*NON-UNIQUE*\]* *{*KEY ...*}**|**{*DEFAULT KEY*}*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... EMPTY KEY](#!ABAP_ALTERNATIVE_2@2@)

Alternative 1   

... *\[*UNIQUE*|*NON-UNIQUE*\]* *{*KEY ...*}**|**{*DEFAULT KEY*}*

Effect

Definition of the primary table key of an internal table by specifying components or defines it as a standard key. The syntax and semantics of the additions are the same as for the statement [TYPES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_primary_key.htm) for standalone table types, except that the primary key of a [bound](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbound_data_type_glosry.htm "Glossary Entry") table type must always be fully specified.

-   In [standard tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_table_glosry.htm "Glossary Entry"), only the addition NON-UNIQUE KEY can be specified. If uniqueness is not specified, this addition is added implicitly. The addition UNIQUE KEY cannot be specified.
-   In [sorted tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensorted_table_glosry.htm "Glossary Entry"), one of the additions UNIQUE KEY or NON-UNIQUE KEY must be specified.
-   In [hashed tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhashed_table_glosry.htm "Glossary Entry"), the addition UNIQUE KEY must be specified.

If no primary key is specified for DATA using WITH, the addition WITH NON-UNIQUE DEFAULT KEY is added implicitly for standard tables. This gives the table a [standard key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_key_glosry.htm "Glossary Entry"), which can be empty. In sorted tables and hashed tables, the primary key must be specified explicitly and cannot be empty.

If the name of the primary key primary\_key is specified explicitly, the obsolete addition [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_header_line.htm) can no longer be specified, even outside the classes.

Hint

The declaration of the primary table key as a [standard key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_standard_key.htm) can be critical for various reasons. It is best to specify key fields explicitly instead. In particular, it must be ensured that the declaration of the standard key is not added by mistake because the key was not specified explicitly.

Example

Definition of a sorted table with a primary key without an explicit name specification.

DATA sbook\_tab
     TYPE SORTED TABLE
     OF sbook
     WITH UNIQUE KEY carrid connid fldate bookid.

Example

Definition of a sorted table with a primary key and an explicit name specification.

DATA sbook\_tab
     TYPE SORTED TABLE
     OF sbook
     WITH UNIQUE KEY primary\_key
                 COMPONENTS carrid connid fldate bookid.

Example

Definition of a sorted table with a primary key for which an alias name is defined.

DATA sbook\_tab
     TYPE SORTED TABLE
     OF sbook
     WITH UNIQUE KEY primary\_key ALIAS full\_table\_key
                 COMPONENTS carrid connid fldate bookid.

Alternative 2   

... EMPTY KEY

Effect

Definition of an [empty primary key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_empty_key.htm) for an internal table. This variant is possible for standard tables only. The syntax and semantics are the same as for the statement [TYPES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_primary_key.htm).

Hints

-   The addition EMPTY KEY can provide clarity in all situations in which the definition of a table key is not important.
-   In general, it is recommended that the addition EMPTY KEY is used instead of not specifying a key definition, since otherwise the [standard key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_standard_key.htm) is used, which often produces unexpected results.

Example

Declaration of a table with an empty primary key. Using the [SORT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_itab.htm) statement without specifying a sort criterion would have no effect for this table.

DATA unsorted\_carrier\_list
     TYPE STANDARD TABLE
     OF scarr
     WITH EMPTY KEY.