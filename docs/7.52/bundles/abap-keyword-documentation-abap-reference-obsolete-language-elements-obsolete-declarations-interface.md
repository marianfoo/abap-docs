# ABAP - Keyword Documentation / ABAP - Reference / Obsolete Language Elements / Obsolete Declarations / Interface work areas

Included pages: 3


### abeninterface_areas_obsolete.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) → 

Interface work areas

Interface work areas are created only once for each [program group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_group_glosry.htm "Glossary Entry") and shared by the [main program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_program_glosry.htm "Glossary Entry") and its additional loaded programs. The assignment of programs to program groups can be dependent on user actions, field contents, and switches, which means that interface work areas are extremely error-prone, with respect to their functions and to their maintainability. The only interface work areas that can still be used for special purposes are [table work areas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_work_area_glosry.htm "Glossary Entry") declared using [TABLES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables.htm). The following declarations are completely obsolete:

-   [DATA - COMMON PART](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_common.htm)

-   [TABLES \*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables_asterisk.htm)

The statement [NODES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnodes.htm) (once required for interface work areas between logical databases and executable programs) is also no longer required if you no longer work with logical databases.

Continue
[DATA - COMMON PART](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_common.htm)
[TABLES \*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables_asterisk.htm)


### abapdata_common.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) →  [Interface work areas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_areas_obsolete.htm) → 

DATA - COMMON PART

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_common_part_shortref.htm)

Obsolete Syntax

DATA BEGIN OF COMMON PART *\[*name*\]*.
  ...
  DATA ...
  ...
DATA END OF COMMON PART *\[*name*\]*.

Effect

This variant of the statement [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata.htm) with the additions BEGIN OF COMMON PART and END OF COMMON PART defines a global [interface work area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_work_area_glosry.htm "Glossary Entry"), that can be used jointly by the programs of a [program group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_group_glosry.htm "Glossary Entry"). All data objects declared between these statements using DATA are part of this [common area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencommon_area_glosry.htm "Glossary Entry").

The addition COMMON PART can only be used in the global declaration part of an ABAP program. Multiple common [data areas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_area_glosry.htm "Glossary Entry") can be declared in a program, but they cannot be nested. Every common data area must be given a unique name using the name addition. The addition name can be omitted only if there is just one common data area in a program.

In all programs of a program group that access the data of a common data area, this area must be declared with the same name and exactly the same structure, otherwise there is no guarantee that it will work correctly and non-handleable exceptions can be raised.

Notes

-   The use of common data areas in otherwise independent programs can be very problematic, with respect to both the maintainability and the functions. Therefore, common data areas should no longer be used. The parameter interfaces of [procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocedure_glosry.htm "Glossary Entry") are available for exchanging data between programs.
    
-   Common data areas for various programs are generally declared in an [include program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninclude_program_glosry.htm "Glossary Entry") that is embedded in all programs involved. However, multiple use of include programs is no longer recommended.
    
-   For more information about issues related to interface work areas, see [Program Groups in External Procedure Calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_groups.htm).
    

Example

Declares a common data area struc in the include program part. By incorporating the include program, the three programs param, sum and dis have shared access to the data area struc if they are part of a program group. The latter is accomplished by loading the programs sum and disp into the program group of param using external subroutine calls. The subroutine display in the program disp displays the input values in the program param and the result of the summation in the subroutine summing.

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


### abaptables_asterisk.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) →  [Interface work areas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_areas_obsolete.htm) → 

TABLES \*

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables_plus_shortref.htm)

Obsolete Syntax

TABLES \*table\_wa.

Effect

This statement declares an additional [table work area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_work_area_glosry.htm "Glossary Entry") \*table\_wa, whose data type, like that of the regular [TABLES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables.htm) statement with its [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") structured data type table\_wa, is taken from ABAP Dictionary.

The additional table work area can be used just like the regular table work area. This applies in particular to obsolete [database accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_access_obsolete.htm).

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
       WHERE  carrid = 'LH'
       INTO @scarr1.
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'UA'
       INTO @scarr2.
