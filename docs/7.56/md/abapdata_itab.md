  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) → 

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

This statement defines an internal table. The definition of the line type, the table category ([STANDARD TABLE](javascript:call_link\('abaptypes_tabcat.htm'\)), [SORTED TABLE](javascript:call_link\('abaptypes_tabcat.htm'\)), or [HASHED TABLE](javascript:call_link\('abaptypes_tabcat.htm'\))), and the initial memory requirement [INITIAL SIZE](javascript:call_link\('abaptypes_itab.htm'\)) matches the definition of table categories in the section [TYPES - TABLE OF](javascript:call_link\('abaptypes_itab.htm'\)) exactly. Using DATA, these additions create a bound table type. The generic types ANY TABLE and INDEX TABLE cannot be used with DATA.

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