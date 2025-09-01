  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Implementing or Including Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterfaces.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INTERFACES%2C%20ABAPINTERFACES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INTERFACES

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterfaces_shortref.htm)

Syntax Forms

[Implementing Interfaces in Classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterfaces_class.htm)

1\. INTERFACES intf
    *\[* [PARTIALLY IMPLEMENTED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterfaces_partially.htm)*\]*
    *{* *{**\[*ABSTRACT METHODS meth1 meth2 ... *\]*
       *\[*FINAL METHODS meth1 meth2 ... *\]**}*
    *|* *\[*ALL METHODS *{*ABSTRACT*|*FINAL*}**\]* *}*
    *\[*DATA VALUES attr1 = val1 attr2 = val2 ...*\]*.

[Including Interfaces in Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterfaces_ifac.htm)

2\. INTERFACES intf.

Effect

This statement implements interfaces in classes or includes interfaces in other interfaces. It can be used in the [public](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpublic_glosry.htm "Glossary Entry") [visibility section](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of the [declaration part](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_definition.htm) of classes and in [interface declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterface_definition.htm).

Continue
[INTERFACES, implementation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterfaces_class.htm)
[INTERFACES, composition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterfaces_ifac.htm)