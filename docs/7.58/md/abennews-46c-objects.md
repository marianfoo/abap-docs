  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 4.xx](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-4.htm) →  [News for ABAP Release 4.6C](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-46c.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20in%20ABAP%20Release%204.6C%2C%20ABENNEWS-46C-OBJECTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects in ABAP Release 4.6C

SAP has expanded ABAP Objects 4.6C to include the following components:

[1\. Runtime Type Identification](#!ABAP_MODIFICATION_1@1@)
[2\. Local Types and Classes](#!ABAP_MODIFICATION_2@2@)
[3\. Specifying the %\_FRIEND Addition](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Runtime Type Identification

The method APPLIES\_TO\_CLASS defined in the class CL\_ABAP\_OBJECTDESCR checks whether or not a reference that has the same type as the type description object can point to an object of the passed class. The class CL\_ABAP\_OBJECTDESCR is assigned to the [Runtime Type Identification](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") (RTTI) area in the ABAP Runtime System.

Runtime type identification also enables the determination of [technical type names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentechnical_type_name_glosry.htm "Glossary Entry"), so that types without relative type names can also be used for dynamic type declarations like [CREATE DATA ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data.htm) or [ASSIGN .... CASTING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_casting.htm).

Modification 2   

Local Types and Classes

Local [CLASS-POOLS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-pool.htm) types can now be implemented in the [PRIVATE SECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprivate.htm) of the global class in question too.

Local data types, classes, and interfaces are now defined in includes known as [CCDEF include](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenccdef_glosry.htm "Glossary Entry") and [CCIMP include](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenccimp_glosry.htm "Glossary Entry") instead of in the \===CL include.

Furthermore, the [macro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_glosry.htm "Glossary Entry") include \===CCMAC makes it possible to define macros in global classes.

Modification 3   

Specifying the %\_FRIEND Addition

Specifying the addition %\_FRIEND of the statement DATA ... TYPE REF TO class makes it possible to access all methods and data elements of the system class class.