# ABAP - Keyword Documentation / ABAP - Programming Language / Declarations / Declaration Statements / Data Objects / DATA / DATA, TABLE OF

Included pages: 5



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abapdata_itab.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_itab.htm)
- [abapdata_keydef.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_keydef.htm)
- [abapdata_primary_key.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_primary_key.htm)
- [abapdata_secondary_key.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_secondary_key.htm)

**Bundle Contains**: 4 documentation pages
**Version**: ABAP 7.58
**Generated**: 2025-09-01T11:25:28.954Z

---

### abapdata_itab.htm

> **📖 Official SAP Documentation**: [abapdata_itab.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_itab.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abapdata_itab.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_itab.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DATA%2C%20TABLE%20OF%2C%20ABAPDATA_ITAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DATA, TABLE OF

[Short Reference](javascript:call_link\('abapdata_shortref.htm'\))

Syntax

DATA itab *{* *{*TYPE *\[*STANDARD*\]**|*SORTED*|*HASHED TABLE OF *\[*REF TO*\]* type*}*
          *|* *{*LIKE *\[*STANDARD*\]**|*SORTED*|*HASHED TABLE OF dobj*}* *}*
          *\[*[tabkeys](javascript:call_link\('abapdata_keydef.htm'\))*\]*
          *\[*INITIAL SIZE n*\]*
          [*\[*VALUE IS INITIAL*\]*](javascript:call_link\('abapdata_options.htm'\))
          [*\[*READ-ONLY*\]*](javascript:call_link\('abapdata_options.htm'\)).

Effect

This statement defines an internal table. The definition of the line type, the table category ([STANDARD TABLE](javascript:call_link\('abaptypes_tabcat.htm'\)), [SORTED TABLE](javascript:call_link\('abaptypes_tabcat.htm'\)), or [HASHED TABLE](javascript:call_link\('abaptypes_tabcat.htm'\))), and the [initial memory requirement](javascript:call_link\('abeninitial_mem_req_glosry.htm'\) "Glossary Entry") [INITIAL SIZE](javascript:call_link\('abaptypes_itab.htm'\)) matches the definition of table categories in the section [TYPES - TABLE OF](javascript:call_link\('abaptypes_itab.htm'\)) exactly. Using DATA, these additions create a bound table type. The generic types ANY TABLE and INDEX TABLE cannot be used with DATA.

[tabkeys](javascript:call_link\('abapdata_keydef.htm'\)) is used to define the [table keys](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry") of the internal table, which, unlike data types, cannot be generic.

Hints

-   When an internal table is created as a data object, only the administrative entry of an internal table is generated. The actual table lines are only inserted at runtime.
-   When an internal table is defined, the start value after the addition [VALUE](javascript:call_link\('abapdata_options.htm'\)) must be IS INITIAL.
-   There are several obsolete variants for declaring standard tables that are described under [Obsolete Declarations](javascript:call_link\('abenitab_declare_obsolete.htm'\)). In particular, the use of the additions [WITH HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\)) and [OCCURS](javascript:call_link\('abapdata_occurs.htm'\)) is obsolete.

Example

Declaration of an internal hashed table. The line type corresponds to the structure of the database table SPFLI. Two key fields are defined for the primary table key. The other statements demonstrate the filling of the table with lines from the DDIC database table SPFLI and how a line is read.

DATA: spfli\_tab TYPE HASHED TABLE OF spfli
                WITH UNIQUE KEY carrid connid,
      spfli\_wa  LIKE LINE OF spfli\_tab.
SELECT \*
       FROM spfli
       WHERE  carrid = 'LH'
       INTO TABLE @spfli\_tab.
spfli\_wa = spfli\_tab\[ KEY primary\_key
                          carrid =  'LH' connid =  '0400' \].
...

Continue
[DATA, tabkeys](javascript:call_link\('abapdata_keydef.htm'\))



**📖 Source**: [abapdata_itab.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_itab.htm)

### abapdata_keydef.htm

> **📖 Official SAP Documentation**: [abapdata_keydef.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_keydef.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abapdata_keydef.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_keydef.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) →  [DATA, TABLE OF](javascript:call_link\('abapdata_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DATA%2C%20tabkeys%2C%20ABAPDATA_KEYDEF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DATA, tabkeys

[Short Reference](javascript:call_link\('abapdata_shortref.htm'\))

Syntax

... *\[* WITH [key](javascript:call_link\('abapdata_primary_key.htm'\)) *\]*
    *\[* WITH [secondary\_key1](javascript:call_link\('abapdata_secondary_key.htm'\)) *\]* *\[* WITH [secondary\_key2](javascript:call_link\('abapdata_secondary_key.htm'\)) *\]* ...

Effect

Definition of the table keys of an internal table. The following can be defined:

-   A [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") using [key](javascript:call_link\('abapdata_primary_key.htm'\)).
    
    Every internal table has a primary key. The primary key must be defined explicitly for [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry") and [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry"). The specification for the primary key can only be omitted for [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry"). The primary table key is then defined automatically as a non-unique [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry").
    
-   Multiple [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") with [secondary\_key1](javascript:call_link\('abapdata_secondary_key.htm'\)), [secondary\_key2](javascript:call_link\('abapdata_secondary_key.htm'\)), ...
    
    The specification of secondary keys is optional for all table categories. If no secondary key is specified, the internal table has only one primary key.
    

Example

Declaration of a [hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") with a unique primary key and two non-unique secondary [sorted keys](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry"), cityfrom\_to and airp\_from\_to.

DATA spfli\_tab TYPE HASHED TABLE OF spfli
  WITH UNIQUE KEY carrid connid
  WITH NON-UNIQUE SORTED KEY cityfrom\_to  COMPONENTS cityfrom cityto
  WITH NON-UNIQUE SORTED KEY airp\_from\_to COMPONENTS airpfrom airpto.

Continue
[DATA, key](javascript:call_link\('abapdata_primary_key.htm'\))
[DATA, secondary\_key](javascript:call_link\('abapdata_secondary_key.htm'\))



**📖 Source**: [abapdata_keydef.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_keydef.htm)

### abapdata_primary_key.htm

> **📖 Official SAP Documentation**: [abapdata_primary_key.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_primary_key.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abapdata_primary_key.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_primary_key.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) →  [DATA, TABLE OF](javascript:call_link\('abapdata_itab.htm'\)) →  [DATA, tabkeys](javascript:call_link\('abapdata_keydef.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DATA%2C%20key%2C%20ABAPDATA_PRIMARY_KEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DATA, key

[Short Reference](javascript:call_link\('abapdata_shortref.htm'\))

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

Definition of the primary table key of an internal table by specifying components or defines it as a standard key. The syntax and semantics of the additions are the same as for the statement [TYPES](javascript:call_link\('abaptypes_primary_key.htm'\)) for standalone table types, except that the primary key of a [bound](javascript:call_link\('abenbound_data_type_glosry.htm'\) "Glossary Entry") table type must always be fully specified.

-   In [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry"), only the addition NON-UNIQUE KEY can be specified. If uniqueness is not specified, this addition is added implicitly. The addition UNIQUE KEY cannot be specified.
-   In [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry"), one of the additions UNIQUE KEY or NON-UNIQUE KEY must be specified.
-   In [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry"), the addition UNIQUE KEY must be specified.

If no primary key is specified for DATA using WITH, the addition WITH NON-UNIQUE DEFAULT KEY is added implicitly for standard tables. This gives the table a [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry"), which can be empty. In sorted tables and hashed tables, the primary key must be specified explicitly and cannot be empty.

If the name of the primary key primary\_key is specified explicitly, the obsolete addition [WITH HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\)) can no longer be specified, even outside the classes.

Hint

The declaration of the primary table key as a [standard key](javascript:call_link\('abenitab_standard_key.htm'\)) can be critical for various reasons. It is best to specify key fields explicitly instead. In particular, it must be ensured that the declaration of the standard key is not added by mistake because the key was not specified explicitly.

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

Definition of an [empty primary key](javascript:call_link\('abenitab_empty_key.htm'\)) for an internal table. This variant is possible for standard tables only. The syntax and semantics are the same as for the statement [TYPES](javascript:call_link\('abaptypes_primary_key.htm'\)).

Hints

-   The addition EMPTY KEY can provide clarity in all situations in which the definition of a table key is not important.
-   In general, it is recommended that the addition EMPTY KEY is used instead of not specifying a key definition, since otherwise the [standard key](javascript:call_link\('abenitab_standard_key.htm'\)) is used, which often produces unexpected results.

Example

Declaration of a table with an empty primary key. Using the [SORT](javascript:call_link\('abapsort_itab.htm'\)) statement without specifying a sort criterion would have no effect for this table.

DATA unsorted\_carrier\_list
     TYPE STANDARD TABLE
     OF scarr
     WITH EMPTY KEY.



**📖 Source**: [abapdata_primary_key.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_primary_key.htm)

### abapdata_secondary_key.htm

> **📖 Official SAP Documentation**: [abapdata_secondary_key.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_secondary_key.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abapdata_secondary_key.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_secondary_key.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) →  [DATA, TABLE OF](javascript:call_link\('abapdata_itab.htm'\)) →  [DATA, tabkeys](javascript:call_link\('abapdata_keydef.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DATA%2C%20secondary_key%2C%20ABAPDATA_SECONDARY_KEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DATA, secondary\_key

[Short Reference](javascript:call_link\('abapdata_shortref.htm'\))

Syntax

... *{*UNIQUE HASHED*}**|**{*UNIQUE SORTED*}**|**{*NON-UNIQUE SORTED*}*
    KEY key\_name *\[*ALIAS alias\_name*\]* COMPONENTS comp1 comp2 ...

Effect

Definition of a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") of an internal table. The syntax and semantics of the additions are the same as those for the statement [TYPES](javascript:call_link\('abaptypes_secondary_key.htm'\)) for standalone table types.

Programming Guideline

[Use secondary keys in a way that benefits the table.](javascript:call_link\('abensecondary_key_guidl.htm'\) "Guideline")

Hints

-   When internal tables are accessed using the statements [READ TABLE itab](javascript:call_link\('abapread_table.htm'\)), [LOOP AT itab](javascript:call_link\('abaploop_at_itab.htm'\)), [MODIFY itab](javascript:call_link\('abapmodify_itab.htm'\)), and [DELETE itab](javascript:call_link\('abapdelete_itab.htm'\)) or using [table expressions](javascript:call_link\('abentable_expressions.htm'\)) and in [mesh types](javascript:call_link\('abaptypes_mesh.htm'\)) and [mesh paths](javascript:call_link\('abenmesh_pathes.htm'\)), a secondary key can be used to specify the lines to be processed or the processing order. To do this, the additions WITH *\[*TABLE*\]* KEY ... COMPONENTS or USING KEY must be specified in the statements and the addition [KEY](javascript:call_link\('abentable_exp_itab_line.htm'\)) must be used in table expressions. A secondary key is never used implicitly.
-   The statement [INSERT itab](javascript:call_link\('abapinsert_itab.htm'\)) determines the insert position using the primary key and primary index only. A secondary key can be specified only for the source table from which multiple lines are inherited. The latter also applies to the statement [APPEND](javascript:call_link\('abapappend.htm'\)).
-   If different table keys of an internal table contain the same components, a syntax check warning occurs, which can be hidden using a pragma. In the case of a reference to a non-generic table type defined using [TYPES](javascript:call_link\('abaptypes_secondary_key.htm'\)), any pragma specified there is also applied to the DATA statement. In the case of a reference to a generic table type for which no primary table key is defined, the specified pragma is not applied to the DATA statement, since this statement uses a completed table type implicitly and the pragma must also be specified for DATA.
-   For more information, see [TYPES](javascript:call_link\('abaptypes_secondary_key.htm'\)).
-   If a secondary key is defined, the obsolete addition [WITH HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\)) can no longer be specified, even outside classes.

Example

Declaration of an internal table with one primary key and two secondary keys.

DATA sbook\_tab
     TYPE STANDARD TABLE
     OF sbook
     WITH NON-UNIQUE KEY carrid connid fldate bookid
     WITH UNIQUE HASHED KEY hash\_key
          COMPONENTS carrid connid fldate bookid
     WITH NON-UNIQUE SORTED KEY sort\_key
          COMPONENTS customid.

Example

As in the previous example but with explicit naming of the primary key.

DATA sbook\_tab
     TYPE STANDARD TABLE
     OF sbook
     WITH NON-UNIQUE KEY primary\_key
          COMPONENTS carrid connid fldate bookid
     WITH UNIQUE HASHED KEY hash\_key
          COMPONENTS carrid connid fldate bookid
     WITH NON-UNIQUE SORTED KEY sort\_key
          COMPONENTS customid.

Example

The program DEMO\_SECONDARY\_KEYS demonstrates the declaration and use of a secondary table key and the resulting performance gains.



**📖 Source**: [abapdata_secondary_key.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_secondary_key.htm)

### abapdata_keydef.htm

> **📖 Official SAP Documentation**: [abapdata_keydef.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_keydef.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abapdata_keydef.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_keydef.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapdata_keydef.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_keydef.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) →  [DATA, TABLE OF](javascript:call_link\('abapdata_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DATA%2C%20tabkeys%2C%20ABAPDATA_KEYDEF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DATA, tabkeys

[Short Reference](javascript:call_link\('abapdata_shortref.htm'\))

Syntax

... *\[* WITH [key](javascript:call_link\('abapdata_primary_key.htm'\)) *\]*
    *\[* WITH [secondary\_key1](javascript:call_link\('abapdata_secondary_key.htm'\)) *\]* *\[* WITH [secondary\_key2](javascript:call_link\('abapdata_secondary_key.htm'\)) *\]* ...

Effect

Definition of the table keys of an internal table. The following can be defined:

-   A [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") using [key](javascript:call_link\('abapdata_primary_key.htm'\)).
    
    Every internal table has a primary key. The primary key must be defined explicitly for [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry") and [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry"). The specification for the primary key can only be omitted for [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry"). The primary table key is then defined automatically as a non-unique [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry").
    
-   Multiple [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") with [secondary\_key1](javascript:call_link\('abapdata_secondary_key.htm'\)), [secondary\_key2](javascript:call_link\('abapdata_secondary_key.htm'\)), ...
    
    The specification of secondary keys is optional for all table categories. If no secondary key is specified, the internal table has only one primary key.
    

Example

Declaration of a [hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") with a unique primary key and two non-unique secondary [sorted keys](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry"), cityfrom\_to and airp\_from\_to.

DATA spfli\_tab TYPE HASHED TABLE OF spfli
  WITH UNIQUE KEY carrid connid
  WITH NON-UNIQUE SORTED KEY cityfrom\_to  COMPONENTS cityfrom cityto
  WITH NON-UNIQUE SORTED KEY airp\_from\_to COMPONENTS airpfrom airpto.

Continue
[DATA, key](javascript:call_link\('abapdata_primary_key.htm'\))
[DATA, secondary\_key](javascript:call_link\('abapdata_secondary_key.htm'\))
