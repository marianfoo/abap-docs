  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.52](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-752.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects in Release 7.52, ABENNEWS-752-ABAP_OBJECTS, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Objects in Release 7.52

Modification

Implementing Interfaces

When implementing interfaces in classes with the statement [INTERFACES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterfaces_class.htm), the following restrictions do not apply:

-   Methods and attributes of component interfaces of the implemented interface can now be specified after the additions ABSTRACT METHODS, FINAL METHODS, and DATA VALUES using the name of the component interface and the [interface component selector](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterface_comp_selector_glosry.htm "Glossary Entry")~. Until now, this was only possible for methods by using an [alias name](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenalias_glosry.htm "Glossary Entry"), for attributes the interface itself had to be included.
-   Attributes that are declared in component interfaces can now be specified after the addition DATA VALUES by using [alias names](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenalias_glosry.htm "Glossary Entry").