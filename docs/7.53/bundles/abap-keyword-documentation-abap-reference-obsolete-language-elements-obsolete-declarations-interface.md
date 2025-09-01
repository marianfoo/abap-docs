# ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete Declarations / Interface Work Areas

Included pages: 3



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abeninterface_areas_obsolete.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninterface_areas_obsolete.htm)
- [abapdata_common.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_common.htm)
- [abaptables_asterisk.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptables_asterisk.htm)

**Bundle Contains**: 3 documentation pages
**Version**: ABAP 7.53
**Generated**: 2025-09-01T11:25:46.193Z

---

### abeninterface_areas_obsolete.htm

> **📖 Official SAP Documentation**: [abeninterface_areas_obsolete.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninterface_areas_obsolete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) → 

Interface Work Areas

Interface work areas are created only once for each [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry") and shared by the [main program](javascript:call_link\('abenmain_program_glosry.htm'\) "Glossary Entry") and its additional loaded programs. The assignment of programs to program groups can be dependent on user actions, field contents, and switches, which means that interface work areas are extremely error-prone, with respect to their functions and to their maintainability. The only interface work areas that can still be used for special purposes are [table work areas](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") declared using [TABLES](javascript:call_link\('abaptables.htm'\)). The following declarations are completely obsolete:

-   [DATA - COMMON PART](javascript:call_link\('abapdata_common.htm'\))

-   [TABLES \*](javascript:call_link\('abaptables_asterisk.htm'\))

The statement [NODES](javascript:call_link\('abapnodes.htm'\)) (once required for interface work areas between logical databases and executable programs) is also no longer required if logical databases are no longer used.

Continue
[DATA - COMMON PART](javascript:call_link\('abapdata_common.htm'\))
[TABLES \*](javascript:call_link\('abaptables_asterisk.htm'\))



**📖 Source**: [abeninterface_areas_obsolete.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninterface_areas_obsolete.htm)

### abapdata_common.htm

> **📖 Official SAP Documentation**: [abapdata_common.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_common.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Interface Work Areas](javascript:call_link\('abeninterface_areas_obsolete.htm'\)) → 

DATA - COMMON PART

[Quick Reference](javascript:call_link\('abapdata_common_part_shortref.htm'\))

Obsolete Syntax

DATA BEGIN OF COMMON PART *\[*name*\]*.
  ...
  DATA ...
  ...
DATA END OF COMMON PART *\[*name*\]*.

Effect

This variant of the statement [DATA](javascript:call_link\('abapdata.htm'\)) with the additions BEGIN OF COMMON PART and END OF COMMON PART defines a global [interface work area](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry"), that can be used jointly by the programs of a [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry"). All data objects declared between these statements using DATA are part of this [common area](javascript:call_link\('abencommon_area_glosry.htm'\) "Glossary Entry").

The addition COMMON PART can only be used in the global declaration part of an ABAP program. Multiple common [data areas](javascript:call_link\('abendata_area_glosry.htm'\) "Glossary Entry") can be declared in a program, but they cannot be nested. Every common data area must be given a unique name using the name addition. The addition name can be omitted only if there is just one common data area in a program.

The following rules apply:

-   In all programs in a program group that declare common data areas with the same name, these areas must have identical layouts. Common data areas are hence viewed as structures whose [structure fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") must be identical and whose deep components must be compatible (pairwise). If not, the runtime error LOAD\_COMMON\_PART\_STRUCT occurs.
    
-   In common data areas it is not possible to declare [object reference variables](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry") with the static type of program-local classes and interfaces, nor is it possible to declare [data reference variables](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry") with the static type of program-local structured types.
    

Notes

-   The use of common data areas in otherwise independent programs can be very problematic, with regard to both the maintainability and the functions. Therefore, common data areas should no longer be used. The parameter interfaces of [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") are available for exchanging data between programs.
    
-   Common data areas for various programs are generally declared in an [include program](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") that is embedded in all programs involved. However, multiple use of include programs is no longer recommended.
    
-   For more information about issues related to interface work areas, see [Program Groups in External Procedure Calls](javascript:call_link\('abenprogram_groups.htm'\)).
    

Example

In this example, a common data area struc is declared in the include program part. By incorporating the include program, the three programs param, sum and dis have shared access to the data area struc if they are part of a program group. The latter is accomplished by loading the programs sum and disp into the program group of param using external subroutine calls. The subroutine display in the program disp outputs the input values to the program param and the result of the summation in the subroutine summing.

\* INCLUDE part.
DATA: BEGIN OF COMMON PART struc,
        f1 TYPE i,
        f2 TYPE i,
        s  TYPE i,
      END OF COMMON PART struc.
PROGRAM param.
INCLUDE part.
PARAMETERS:
  p1 TYPE i DEFAULT 20,
  p2 TYPE i DEFAULT 90.
f1 = p1.
f2 = p2.
PERFORM summming IN PROGRAM sum.
PROGRAM sum.
INCLUDE part.
FORM summing.
  s = f1 + f2.
  PERFORM display IN PROGRAM disp.
ENDFORM.
PROGRAM disp.
INCLUDE part.
FORM display.
  WRITE: / f1, f2, s.
ENDFORM.



**📖 Source**: [abapdata_common.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_common.htm)

### abaptables_asterisk.htm

> **📖 Official SAP Documentation**: [abaptables_asterisk.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptables_asterisk.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abaptables_asterisk.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptables_asterisk.htm)


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Interface Work Areas](javascript:call_link\('abeninterface_areas_obsolete.htm'\)) → 

TABLES \*

[Quick Reference](javascript:call_link\('abaptables_plus_shortref.htm'\))

Obsolete Syntax

TABLES \*table\_wa.

Effect

This statement declares an additional [table work area](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") \*table\_wa, whose data type, like that of the regular [TABLES](javascript:call_link\('abaptables.htm'\)) statement with its [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") structured data type table\_wa, is taken from ABAP Dictionary.

The additional table work area can be used just like the regular table work area. This applies in particular to obsolete [database accesses](javascript:call_link\('abendatabase_access_obsolete.htm'\)).

Note

The statement TABLES cannot be used in classes. The addition TYPE can be used to reference the data types in ABAP Dictionary and declare any number of separate work areas.

Bad Example

Declaration of a regular and additional table work area and their use in obsolete short forms of the SELECT statement.

TABLES: scarr, \*scarr.
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'LH'.
SELECT SINGLE \*
       FROM \*scarr
       WHERE carrid = 'UA'.

Good Example

Declares two work areas using DATA and how they are used in the INTO clause of the SELECT statement.

DATA: scarr1 TYPE scarr,
      scarr2 TYPE scarr.
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'LH'
       INTO @scarr1.
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'UA'
       INTO @scarr2.
