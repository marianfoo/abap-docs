  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.52](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-752.htm) → 

ABAP Objects in Release 7.52

[1\. Implementing interfaces](#!ABAP_MODIFICATION_1@1@)

Modification 1

Implementing Interfaces

When implementing interfaces in classes with the statement [INTERFACES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinterfaces_class.htm), the following restrictions do not apply:

-   Methods and attributes of component interfaces of the implemented interface can now be specified after the additions ABSTRACT METHODS, FINAL METHODS, and DATA VALUES using the name of the component interface and the [interface component selector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninterface_comp_selector_glosry.htm "Glossary Entry")~. Until now, this was only possible for methods by using an [alias name](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenalias_glosry.htm "Glossary Entry"), for attributes the interface itself had to be included.

-   Attributes that are declared in component interfaces can now be specified after the addition DATA VALUES by using [alias names](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenalias_glosry.htm "Glossary Entry").