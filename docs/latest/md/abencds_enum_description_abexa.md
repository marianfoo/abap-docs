  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Type Definitions](javascript:call_link\('abencds_tdl.htm'\)) →  [ABAP CDS - TDL for Type Definitions](javascript:call_link\('abencds_types.htm'\)) →  [CDS TDL - DEFINE TYPE](javascript:call_link\('abencds_define_type.htm'\)) →  [ABAP CDS - Enumerated Types](javascript:call_link\('abencds_enumeration_types.htm'\)) →  [CDS TDL - DEFINE TYPE ENUM](javascript:call_link\('abencds_define_enum_type.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20TDL%20-%20CDS%20Enumerated%20Type%2C%20Type%20Description%2C%20ABENCDS_ENUM_DESCRIPTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion%20for%20improvement:)

CDS TDL - CDS Enumerated Type, Type Description

This example demonstrates type description for CDS enumerated types.

Source Code   

\* Public class definition
CLASS cl\_demo\_cds\_enum\_type DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cds\_enum\_type IMPLEMENTATION.
  METHOD main.
    TYPES my\_type TYPE demo\_cds\_enum\_weekday.
    FINAL(descr) = cl\_abap\_enumdescr=>describe\_by\_name(
      'DEMO\_CDS\_ENUM\_WEEKDAY' ).
    out->next\_section( 'CL\_ABAP\_ENUMDESCR'
    )->write( descr ).
  ENDMETHOD.
ENDCLASS.

Description   

The type description class CL\_ABAP\_ENUMDESCR returns properties of the CDS enumerated type DEMO\_CDS\_ENUM\_WEEKDAY.