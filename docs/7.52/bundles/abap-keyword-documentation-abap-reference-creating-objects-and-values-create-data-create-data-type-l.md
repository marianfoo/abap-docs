# ABAP - Keyword Documentation / ABAP - Reference / Creating Objects and Values / CREATE DATA / CREATE DATA - TYPE, LIKE

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abapcreate_data_existing.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_existing.htm)
- [abencreate_structured_data_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_structured_data_abexa.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.438Z

---

### abapcreate_data_existing.htm

> **📖 Official SAP Documentation**: [abapcreate_data_existing.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_existing.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) → 

CREATE DATA - TYPE, LIKE

[Quick Reference](javascript:call_link\('abapcreate_data_shortref.htm'\))

Syntax

CREATE DATA dref *\[*[area\_handle](javascript:call_link\('abapcreate_data_area_handle.htm'\))*\]*
                 *{* *{*TYPE *\[*LINE OF*\]* *{*type*|*(name)*}**}*
                 *|* *{*LIKE *\[*LINE OF*\]* dobj*}* *}*.

Effect

The type of the new data object is defined by the specified type or data object.

-   type can be any data type from ABAP Dictionary, in particular the structure of a database table, a [classic view](javascript:call_link\('abenclassical_view_glosry.htm'\) "Glossary Entry"), or a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), a public data type of a global class, or any data type of the same program already defined defined using TYPES and that is either more specific than or identical to the static type of dref. Alternatively, a character-like data object name can be specified in parentheses that contains the name of the existing data type when the statement is executed. This is not case-sensitive. The name in name can also be an [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry"). If a standard table type with a generic primary table key is specified after TYPE, a new [bound](javascript:call_link\('abenbound_data_type_glosry.htm'\) "Glossary Entry") table type with standard key is created and used.
    
-   A data object that is [visible](javascript:call_link\('abenlifetime_and_visibility.htm'\)) at this point can be [specified](javascript:call_link\('abendata_objects_usage_reading.htm'\)) for dobj. The new data object inherits the current data type. If dobj is specified as a formal parameter or field symbol, it can be fully or partially generic. When the statement CREATE DATA is executed, a data object must be bound to a generically typed field symbol or parameter and the type of the data object is used. In the case of a fully typed field symbol or parameter, the declared type is used. A data object does not have to be bound.
    

The optional addition LINE OF can be used if type or the name in name is a table type, or if dobj is an internal table. As a result, the new data object inherits the attributes of the row type of the internal table.

Notes

-   LIKE can be used to reference the public attributes of global classes.
    
-   If a type of another program is specified using an [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry") in name, this program is loaded into a new [additional program group](javascript:call_link\('abenadditional_prog_group_glosry.htm'\) "Glossary Entry") or into the current [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry"), depending on the program type (if not already loaded).
    
-   When an anonymous data object is created with an [enumerated type](javascript:call_link\('abaptypes_enum.htm'\)), the same rules apply for this object as for every other data object of this type.
    
-   When a data type type is used, the [instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) acts like the statement CREATE DATA dref TYPE type and can be used in [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). The content of name cannot be specified dynamically here.
    

Example

Creates an anonymous data object of type SCARR. The static data type of the data reference variable is generic. If can only be dereferenced and used on operand positions by means of assignment to a field symbol.

DATA dref TYPE REF TO data.
CREATE DATA dref TYPE scarr.
ASSIGN dref->\* TO FIELD-SYMBOL(<fs>).
SELECT SINGLE \*
       FROM scarr
       WHERE  carrid = 'LH'
       INTO @<fs>.
ASSIGN COMPONENT 'CARRID'   OF STRUCTURE <fs> TO FIELD-SYMBOL(<fs1>).
ASSIGN COMPONENT 'CARRNAME' OF STRUCTURE <fs> TO FIELD-SYMBOL(<fs2>).
cl\_demo\_output=>display( |{ <fs1> }, { <fs2> }| ).

Executable Example

[Creating Structured Data Objects](javascript:call_link\('abencreate_structured_data_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Creating Structured Data Objects](javascript:call_link\('abencreate_structured_data_abexa.htm'\))



**📖 Source**: [abapcreate_data_existing.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_existing.htm)

### abencreate_structured_data_abexa.htm

> **📖 Official SAP Documentation**: [abencreate_structured_data_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_structured_data_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencreate_structured_data_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_structured_data_abexa.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) →  [CREATE DATA - TYPE, LIKE](javascript:call_link\('abapcreate_data_existing.htm'\)) → 

Creating Structured Data Objects

This example demonstrates how structured data objects are created.

Source Code

REPORT demo\_create\_structured\_data.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA dref TYPE REF TO data.
    DATA: dbtab TYPE tabname VALUE 'SPFLI',
          rows  TYPE i VALUE 100.
    FIELD-SYMBOLS <wa> TYPE any.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = dbtab
      )->add\_field( CHANGING field = rows )->request( ).
    DATA(out) = cl\_demo\_output=>new( ).
    dbtab = to\_upper( dbtab ).
    TRY.
        dbtab = cl\_abap\_dyn\_prg=>check\_table\_name\_str(
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
        CREATE DATA dref TYPE (dbtab).
        ASSIGN dref->\* TO <wa>.
        SELECT \*
               FROM (dbtab) UP TO @rows ROWS
               INTO @<wa>.
          out->write( <wa> ).
        ENDSELECT.
        out->display( ).
      CATCH cx\_sy\_create\_data\_error.
        out->display( 'Error in data creation' ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Creates a work area that matches any database table and reads the first rows (rows) of the database table into this work area using a [SELECT](javascript:call_link\('abapselect.htm'\)) loop. Since the data reference dref is typed dynamically, the work area can only be read using the field symbol <wa>.

The method CHECK\_TABLE\_NAME\_STR of the class CL\_ABAP\_DYN\_PRG checks whether the database table specified exists and can be used.
