  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-4.htm) →  [Changes in Release 4.6C](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-46c.htm) → 

ABAP Objects in Release 4.6C

SAP has expanded ABAP Objects 4.6 C to include the following components:

[1\. Run Time Type Identification](#!ABAP_MODIFICATION_1@1@)

[2\. Local types and classes](#!ABAP_MODIFICATION_2@2@)

[3\. Specifying the addition %\_FRIEND](#!ABAP_MODIFICATION_3@3@)

Modification 1

Runtime Type Identification

The method APPLIES\_TO\_CLASS defined in the class CL\_ABAP\_OBJECTDESCR checks whether or not a reference that has the same type as the type description object can point to an object of the passed class. The class CL\_ABAP\_OBJECTDESCR is assigned to the [run time type identification](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") (RTTI) area in the ABAP runtime system.

Run time type identification also enables a technical type name to be defined, although types without names can also be used for dynamic type declarations like [CREATE DATA ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data.htm) or [ASSIGN .... CASTING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting.htm)

Modification 2

Local Types and Classes

Local [CLASS-POOLS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-pool.htm) types can now be implemented in the [PRIVATE SECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprivate.htm) of the global class in question too.

Local data types, classes, and interfaces are now defined in includes known as CCDEF and CCIMP includes instead of in the \===CL include. More information about using these includes can be found under [Local Types for Global Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocal_type_glob_class_guidl.htm "Guideline").

Furthermore, the [macro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmacro_glosry.htm "Glossary Entry") include \===CCMAC makes it possible to define macros in global classes.

Modification 3

Specifying the %\_FRIEND Addition

Specifying the addition %\_FRIEND of the statement DATA ... TYPE REF TO class makes it possible to access all methods and data elements of the system class class.