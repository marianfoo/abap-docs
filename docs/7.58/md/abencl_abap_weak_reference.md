---
title: "Weak References"
description: |
  An object in the system class CL_ABAP_WEAK_REFERENCE represents a weak reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenweak_reference_glosry.htm 'Glossary Entry') to an object in a class. Unlike regular object references(https://help.sap.com/doc/abapdocu_758_index_htm
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_weak_reference.htm"
abapFile: "abencl_abap_weak_reference.htm"
keywords: ["select", "delete", "do", "if", "try", "method", "class", "data", "types", "abencl", "abap", "weak", "reference"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_objects.htm) →  [References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_references.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Weak%20References%2C%20ABENCL_ABAP_WEAK_REFERENCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Weak References

An object in the system class CL\_ABAP\_WEAK\_REFERENCE represents a [weak reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenweak_reference_glosry.htm "Glossary Entry") to an object in a class. Unlike regular [object references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_reference_glosry.htm "Glossary Entry"), a weak reference is ignored when the [garbage collector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengarbage_collector_glosry.htm "Glossary Entry") is executed. This means that a weak reference does not keep the referenced object from being deleted when the garbage collector is executed.

A weak reference to an existing object is created by passing an object reference to the instance constructor of CL\_ABAP\_WEAK\_REFERENCE. The [functional method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_glosry.htm "Glossary Entry") GET can then be used to retrieve the reference afterwards. If the object was deleted in the meantime, the return value is initial.

Hint

A different type of reference keeps objects alive until the available memory becomes limited. The class CL\_ABAP\_SOFT\_REFERENCE is designed for these [soft references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensoft_reference_glosry.htm "Glossary Entry"), but this class is currently still implemented like the class CL\_ABAP\_WEAK\_REFERENCE.

Example

A weak reference is set to the object of the object reference variable oref, and the latter is then deleted. The weak reference points to the object for as long as the garbage collector is not executed. The return value is initial after the explicit call of the garbage collector.

CLASS demo DEFINITION.
ENDCLASS.
START-OF-SELECTION.
  DATA(oref) = NEW demo( ).
  FINAL(wref) = NEW cl\_abap\_weak\_reference( oref ).
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