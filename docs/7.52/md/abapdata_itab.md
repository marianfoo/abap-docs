  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) → 

DATA - TABLE OF

[Quick Reference](javascript:call_link\('abapdata_shortref.htm'\))

Syntax

DATA itab *{* *{*TYPE *\[*STANDARD*\]**|*SORTED*|*HASHED TABLE OF *\[*REF TO*\]* type*}*
          *|* *{*LIKE *\[*STANDARD*\]**|*SORTED*|*HASHED TABLE OF dobj*}* *}*
          *\[*[tabkeys](javascript:call_link\('abapdata_keydef.htm'\))*\]*
          *\[*INITIAL SIZE n*\]*
          [*\[*VALUE IS INITIAL*\]*](javascript:call_link\('abapdata_options.htm'\))
          [*\[*READ-ONLY*\]*](javascript:call_link\('abapdata_options.htm'\)).

Effect

This statement defines an internal table. The definition of the row type, the table category ([STANDARD TABLE](javascript:call_link\('abaptypes_tabkind.htm'\)), [SORTED TABLE](javascript:call_link\('abaptypes_tabkind.htm'\)), or [HASHED TABLE](javascript:call_link\('abaptypes_tabkind.htm'\))), and the initial memory size [INITIAL SIZE](javascript:call_link\('abaptypes_itab.htm'\)) matches the definition of table categories in the section [TYPES - TABLE OF](javascript:call_link\('abaptypes_itab.htm'\)) exactly. Using DATA, these additions create a bound table type. The generic types ANY TABLE and INDEX TABLE cannot be used with DATA.

[tabkeys](javascript:call_link\('abapdata_keydef.htm'\)) is used to define the [table keys](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry") of the internal table, which, unlike data types, cannot be generic.

Notes

-   When an internal table is created as a data object, only the administration entry for an internal table is created. The actual table rows are not inserted until runtime.
    
-   When an internal table is defined, the start value after the addition [VALUE](javascript:call_link\('abapdata_options.htm'\)) must be IS INITIAL.
    
-   Several obsolete variants for declaring standard tables exist, described under [Obsolete Declarations](javascript:call_link\('abenitab_declare_obsolete.htm'\)). In particular, the obsolete use of the additions [WITH HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\)) and [OCCURS](javascript:call_link\('abapdata_occurs.htm'\)) should be noted.
    

Example

Declares an internal hashed table. The row type corresponds to the structure of the database table SPFLI. Two key fields are defined for the primary table key. The other statements demonstrate how the table is filled with rows from database table SPFLI and how a row is read.

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
[DATA - tabkeys](javascript:call_link\('abapdata_keydef.htm'\))