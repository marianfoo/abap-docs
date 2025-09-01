  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 6.xx](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-6.htm) →  [News for Release 6.10](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-610.htm) → 

Type Concept in Release 6.10

[1\. Constants for Structures and Internal Tables](#!ABAP_MODIFICATION_1@1@)
[2\. New Generic Types for Field Symbols and Formal Parameters](#!ABAP_MODIFICATION_2@2@)
[3\. Methods for Displaying Specific Type Attributes](#!ABAP_MODIFICATION_3@3@)
[4\. Type Description Objects for All Friends of a Class](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Constants for Structures and Internal Tables

Constants can now be defined for structures and internal tables, which in turn contain internal tables or references and strings. Only the initial value is possible however.

Example

types:
  begin of STRUC,
    ITAB type standard table of SPFLI with non-unique key CARRID,
    MREF type ref to OBJECT,
  end of STRUC.
constants:
  CONST  type STRUC value is initial.

Modification 2   

New Generic Types for Field Symbols and Formal Parameters

The new [generic types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_generic.htm) can be used for typing field symbols and parameters in subroutines, function modules, or methods. The following table shows their variants:

Generic Type

Types

simple

clike, xsequence, numeric

clike

n, d, t, struc1, csequence

csequence

c, string

xsequence

x, xstring

numeric

i, s, b, p, f

Modification 3   

Methods for Displaying Specific Type Attributes

The method GET\_PROPERTY, which provides information about specific type attributes at runtime, has been added to the class CL\_ABAP\_TYPEDESCR.

Modification 4   

Type Description Objects for All Friends of a Class

The method GET\_FRIEND\_TYPES was introduced in the class CL\_ABAP\_CLASSDESCR. This can be used to query the type description objects for all friends of a class at runtime.