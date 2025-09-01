  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.52](javascript:call_link\('abennews-752.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20in%20ABAP%20Release%207.52%2C%20ABENNEWS-752-ABAP_OBJECTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects in ABAP Release 7.52

Modification

Implementing Interfaces

When implementing interfaces in classes with the statement [INTERFACES](javascript:call_link\('abapinterfaces_class.htm'\)), the following restrictions do not apply:

-   Methods and attributes of component interfaces of the implemented interface can now be specified after the additions ABSTRACT METHODS, FINAL METHODS, and DATA VALUES using the name of the component interface and the [interface component selector](javascript:call_link\('abeninterface_comp_selector_glosry.htm'\) "Glossary Entry")~. Until now, this was only possible for methods by using an [alias name](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry"), for attributes the interface itself had to be included.
-   Attributes that are declared in component interfaces can now be specified after the addition DATA VALUES by using [alias names](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry").