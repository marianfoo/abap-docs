  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.10](javascript:call_link\('abennews-610.htm'\)) → 

Type Concept in Release 6.10

[1\. Constants for structures and internal tables](#!ABAP_MODIFICATION_1@1@)
[2\. New generic types for field symbols and formal parameters](#!ABAP_MODIFICATION_2@2@)
[3\. Methods for displaying specific type attributes](#!ABAP_MODIFICATION_3@3@)
[4\. Type description objects for all friends of a class](#!ABAP_MODIFICATION_4@4@)

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

The new [generic types](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) can be used for typing field symbols and parameters in subroutines, function modules, or methods. The following table shows their variants:

Gen. Type

Types

SIMPLE

CLIKE, XSEQUENCE, NUMERIC

CLIKE

N, D, T, STRUC1, CSEQUENCE

CSEQUENCE

C, STRING

XSEQUENCE

X, XSTRING

NUMERIC

I, s, b, P, F

Modification 3

Methods for Displaying Specific Type Attributes

The method GET\_PROPERTY, which provides information about specific type attributes at runtime, has been added to the class CL\_ABAP\_TYPEDESCR.

Modification 4

Type Description Objects for All Friends of a Class

The method GET\_FRIEND\_TYPES was introduced in the class CL\_ABAP\_CLASSDESCR. This can be used to query the type description objects for all friends of a class at runtime.