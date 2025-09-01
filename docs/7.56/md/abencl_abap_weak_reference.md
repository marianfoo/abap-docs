  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_and_objects.htm) →  [Types and Objects, Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_objects.htm) →  [References](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_references.htm) → 

Weak References

An object in the system class CL\_ABAP\_WEAK\_REFERENCE represents a [weak reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenweak_reference_glosry.htm "Glossary Entry") to an object in a class. Unlike regular [object references](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobject_reference_glosry.htm "Glossary Entry"), a weak reference is ignored when the [garbage collector](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengarbage_collector_glosry.htm "Glossary Entry") is executed. This means that a weak reference does not keep the referenced object from being deleted when the garbage collector is executed.

A weak reference to an existing object is created by passing an object reference to the instance constructor of CL\_ABAP\_WEAK\_REFERENCE. The [functional method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunctional_method_glosry.htm "Glossary Entry") GET can then be used to retrieve the reference afterwards. If the object was deleted in the meantime, the return value is initial.

Hint

A different type of reference keeps objects alive until the available memory becomes limited. The class CL\_ABAP\_SOFT\_REFERENCE is designed for these [soft references](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensoft_reference_glosry.htm "Glossary Entry"), but this class is currently still implemented like the class CL\_ABAP\_WEAK\_REFERENCE.

Example

A weak reference is set to the object of the object reference variable oref, and the latter is then deleted. The weak reference points to the object for as long as the garbage collector is not executed. The return value is initial after the explicit call of the garbage collector.

CLASS demo DEFINITION.
ENDCLASS.
START-OF-SELECTION.
  DATA(oref) = NEW demo( ).
  DATA(wref) = NEW cl\_abap\_weak\_reference( oref ).
  CLEAR oref.
  IF wref->get( ) IS NOT INITIAL.
    cl\_demo\_output=>write( 'Weak reference not initial' ).
  ENDIF.
  cl\_demo\_output=>write( 'Garbage collection' ).
  cl\_abap\_memory\_utilities=>do\_garbage\_collection( ).
  IF wref->get( ) IS INITIAL.
    cl\_demo\_output=>write( 'Weak reference initial' ).
  ENDIF.
cl\_demo\_output=>display( ).