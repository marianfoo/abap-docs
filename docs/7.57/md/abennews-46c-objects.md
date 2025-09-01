  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for Release 4.6C](javascript:call_link\('abennews-46c.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects in Release 4.6C, ABENNEWS-46C-OBJECTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

ABAP Objects in Release 4.6C

SAP has expanded ABAP Objects 4.6C to include the following components:

[1\. Run Time Type Identification](#!ABAP_MODIFICATION_1@1@)
[2\. Local Types and Classes](#!ABAP_MODIFICATION_2@2@)
[3\. Specifying the %\_FRIEND Addition](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Run Time Type Identification

The method APPLIES\_TO\_CLASS defined in the class CL\_ABAP\_OBJECTDESCR checks whether or not a reference that has the same type as the type description object can point to an object of the passed class. The class CL\_ABAP\_OBJECTDESCR is assigned to the [Run Time Type Identification](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry") (RTTI) area in the ABAP Runtime System.

Run time type identification also enables a technical type name to be defined, although types without names can also be used for dynamic type declarations like [CREATE DATA ...](javascript:call_link\('abapcreate_data.htm'\)) or [ASSIGN .... CASTING](javascript:call_link\('abapassign_casting.htm'\)).

Modification 2   

Local Types and Classes

Local [CLASS-POOLS](javascript:call_link\('abapclass-pool.htm'\)) types can now be implemented in the [PRIVATE SECTION](javascript:call_link\('abapprivate.htm'\)) of the global class in question too.

Local data types, classes, and interfaces are now defined in includes known as [CCDEF include](javascript:call_link\('abenccdef_glosry.htm'\) "Glossary Entry") and [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") instead of in the \===CL include.

Furthermore, the [macro](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry") include \===CCMAC makes it possible to define macros in global classes.

Modification 3   

Specifying the %\_FRIEND Addition

Specifying the addition %\_FRIEND of the statement DATA ... TYPE REF TO class makes it possible to access all methods and data elements of the system class class.