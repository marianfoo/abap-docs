  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_declarations.htm) →  [Interface work areas](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterface_areas_obsolete.htm) → 

DATA - COMMON PART

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_common_part_shortref.htm)

Obsolete Syntax

DATA BEGIN OF COMMON PART *\[*name*\]*.
  ...
  DATA ...
  ...
DATA END OF COMMON PART *\[*name*\]*.

Effect

This variant of the statement [DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata.htm) with the additions BEGIN OF COMMON PART and END OF COMMON PART defines a global [interface work area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterface_work_area_glosry.htm "Glossary Entry"), that can be used jointly by the programs of a [program group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_group_glosry.htm "Glossary Entry"). All data objects declared between these statements using DATA are part of this [common area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencommon_area_glosry.htm "Glossary Entry").

The addition COMMON PART can only be used in the global declaration part of an ABAP program. Multiple common [data areas](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_area_glosry.htm "Glossary Entry") can be declared in a program, but they cannot be nested. Every common data area must be given a unique name using the name addition. The addition name can be omitted only if there is just one common data area in a program.

The following rules apply:

-   In all programs in a program group that declare common data areas with the same name, these areas must have identical layouts. Common data areas are hence viewed as structures whose [structure fragment view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") must be identical and whose deep components must be compatible (pairwise). If not, the runtime error LOAD\_COMMON\_PART\_STRUCT occurs.
    
-   In common data areas it is not possible to declare [object reference variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") with the static type of program-local classes and interfaces, nor is it possible to declare [data reference variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") with the static type of program-local structured types.
    

Notes

-   The use of common data areas in otherwise independent programs can be very problematic, with regard to both the maintainability and the functions. Therefore, common data areas should no longer be used. The parameter interfaces of [procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry") are available for exchanging data between programs.
    
-   Common data areas for various programs are generally declared in an [include program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninclude_program_glosry.htm "Glossary Entry") that is embedded in all programs involved. However, multiple use of include programs is no longer recommended.
    
-   For more information about issues related to interface work areas, see [Program Groups in External Procedure Calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_groups.htm).
    

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