# ABAP - Keyword Documentation / ABAP - Reference / Creating Objects and Values / CREATE DATA / CREATE DATA - TABLE OF

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abapcreate_data_itab.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_itab.htm)
- [abencreate_tabular_data_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_tabular_data_abexa.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.437Z

---

### abapcreate_data_itab.htm

> **📖 Official SAP Documentation**: [abapcreate_data_itab.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_itab.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) → 

CREATE DATA - TABLE OF

[Quick Reference](javascript:call_link\('abapcreate_data_shortref.htm'\))

Syntax

CREATE DATA dref *\[*[area\_handle](javascript:call_link\('abapcreate_data_area_handle.htm'\))*\]*
                 *{* *{*TYPE *\[*STANDARD*\]**|*SORTED*|*HASHED TABLE OF *\[*REF TO*\]* *{*type*|*(name)*}**}*
                 *|* *{*LIKE *\[*STANDARD*\]**|*SORTED*|*HASHED TABLE OF dobj*}* *}*
                 *\[* WITH *{* *{**\[*UNIQUE*|*NON-UNIQUE*\]*
                           *{*KEY *{*comp1 comp2 ...*}**|*(keytab)*}**|**{*DEFAULT KEY*}**}**}*
                        *|* *{*EMPTY KEY*}*  *\]*
                 *\[*INITIAL SIZE n*\]*.

Effect

The statement CREATE DATA uses the addition tabkind OF to create an internal table. The meaning of the additions is the same as when declaring internal tables using the statement [DATA](javascript:call_link\('abapdata_itab.htm'\)), but with special rules for [CREATE DATA](javascript:call_link\('abapcreate_data_existing.htm'\)) if dobj is specified after LIKE. The explicit definition of the primary table key is only optional if a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") is being created.

Whereas the content of DATA is specified statically, the following can be specified dynamically for CREATE DATA:

-   The row type after TYPE or the static type of a row flagged as a reference variable after TYPE REF TO can have a character-like data object called name. In this case, the same rules apply as in the other variants of CREATE DATA.
    
-   The definition of the primary table key can specify a parenthesized internal table keytab instead of a static component comp1 comp2 ...:
    ... WITH *\[*UNIQUE*|*NON-UNIQUE*\]* KEY (keytab) ...
    The table keytab must have a character-like data type and must contain the name of a valid component in each row or the identifier table\_line for the primary table key in a single row.
    
-   A numeric data object can be specified for n after INITIAL SIZE.
    

Notes

-   The definition of the table key is subject to the following conditions that do not apply to DATA:
    

-   No [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") can be defined in the statement CREATE DATA.

-   The name [primary\_key](javascript:call_link\('abapdata_primary_key.htm'\)) and the addition [COMPONENTS](javascript:call_link\('abapdata_primary_key.htm'\)) cannot be specified explicitly in the definition of the primary key.

[Runtime type creation](javascript:call_link\('abenrun_time_type_creation_glosry.htm'\) "Glossary Entry") should be used instead to create dynamic table types with secondary keys. The same applies when creating an [empty table key](javascript:call_link\('abenitab_empty_key.htm'\)) dynamically, since the internal table keytab can only be used to define non-empty keys.

-   CREATE DATA cannot be used to create internal tables with [header lines](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry").
    

Example

Creates and uses an anonymous hash table. The type of the data reference variable is generic, which means it can only be dereferenced in the case of assignment to a field symbol.

DATA dref TYPE REF TO data.
FIELD-SYMBOLS <fs> TYPE ANY TABLE.
CREATE DATA dref TYPE HASHED TABLE OF scarr
                 WITH UNIQUE KEY carrid.
ASSIGN dref->\* TO <fs>.
SELECT \*
       FROM scarr
       INTO TABLE @<fs>.
cl\_demo\_output=>display( <fs> ).

Executable Example

[Creating Tabular Data Objects](javascript:call_link\('abencreate_tabular_data_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Creating Tabular Data Objects](javascript:call_link\('abencreate_tabular_data_abexa.htm'\))



**📖 Source**: [abapcreate_data_itab.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_itab.htm)

### abencreate_tabular_data_abexa.htm

> **📖 Official SAP Documentation**: [abencreate_tabular_data_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_tabular_data_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencreate_tabular_data_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_tabular_data_abexa.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) →  [CREATE DATA - TABLE OF](javascript:call_link\('abapcreate_data_itab.htm'\)) → 

Creating Tabular Data Objects

This example demonstrates how tabular data objects are created.

Source Code

REPORT demo\_create\_tabular\_data.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA dref TYPE REF TO data.
    DATA: dbtab TYPE tabname VALUE 'SPFLI',
          rows  TYPE i VALUE 100.
    FIELD-SYMBOLS <table> TYPE ANY TABLE.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = dbtab
      )->add\_field( CHANGING field = rows )->request( ).
    DATA(out) = cl\_demo\_output=>new( ).
    dbtab = to\_upper( dbtab ).
    TRY.
        cl\_abap\_dyn\_prg=>check\_table\_name\_str(
          val = dbtab
          packages = 'SAPBC\_DATAMODEL' ).
      CATCH cx\_abap\_not\_a\_table.
        out->display( 'Database table not found' ).
        LEAVE PROGRAM.
      CATCH cx\_abap\_not\_in\_package.
        out->display(
          'Only tables from the flight data model are allowed' ).
        LEAVE PROGRAM.
    ENDTRY.
    TRY.
        CREATE DATA dref TYPE STANDARD TABLE OF (dbtab)
                              WITH NON-UNIQUE DEFAULT KEY.
        ASSIGN dref->\* TO <table>.
        SELECT \*
               FROM (dbtab) UP TO @rows ROWS
               INTO TABLE @<table>.
        out->display( <table> ).
      CATCH cx\_sy\_create\_data\_error.
        out->display( 'Error in data creation' ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Creates an internal table that matches any database table and reads the first few rows (rows) of the database into the internal table. Since the data reference dref is typed dynamically, the internal table can only be read using the field symbol <tab>.

The method CHECK\_TABLE\_NAME\_STR of the class CL\_ABAP\_DYN\_PRG checks whether the database table specified exists and can be used.
