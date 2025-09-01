  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects - Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [References](javascript:call_link\('abendata_references.htm'\)) → 

Weak References

An object in the system class CL\_ABAP\_WEAK\_REFERENCE represents a [weak reference](javascript:call_link\('abenweak_reference_glosry.htm'\) "Glossary Entry") to an object in a class. Unlike regular [object references](javascript:call_link\('abenobject_reference_glosry.htm'\) "Glossary Entry"), a weak reference is ignored when the [garbage collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry") runs. This means that a weak reference does not prevent the referenced object from being deleted when the garbage collector is executed.

A weak reference to an existing object is created by passing an object reference to the instance constructor of CL\_ABAP\_WEAK\_REFERENCE. The [functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") GET can then be used to retrieve the reference afterwards. If the object was deleted in the meantime, the return value is initial.

Note

A different type of reference preserves objects until the available memory runs low. The class CL\_ABAP\_SOFT\_REFERENCE is designed for these [soft references](javascript:call_link\('abensoft_reference_glosry.htm'\) "Glossary Entry"), but this class is currently still implemented in the same way as class CL\_ABAP\_WEAK\_REFERENCE.

Example

A weak reference to the object of the object reference variable oref is set and the latter is then deleted. The weak reference points to the object until the garbage collector is executed. The return value is initial until the garbage collector is called explicitly.

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