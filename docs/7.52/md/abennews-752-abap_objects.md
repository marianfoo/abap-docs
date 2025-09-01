  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.52](javascript:call_link\('abennews-752.htm'\)) → 

ABAP Objects in Release 7.52

[1\. Implementing interfaces](#!ABAP_MODIFICATION_1@1@)

Modification 1

Implementing Interfaces

When implementing interfaces in classes with the statement [INTERFACES](javascript:call_link\('abapinterfaces_class.htm'\)), the following restrictions do not apply:

-   Methods and attributes of component interfaces of the implemented interface can now be specified after the additions ABSTRACT METHODS, FINAL METHODS, and DATA VALUES using the name of the component interface and the [interface component selector](javascript:call_link\('abeninterface_comp_selector_glosry.htm'\) "Glossary Entry")~. Until now, this was only possible for methods by using an [alias name](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry"), for attributes the interface itself had to be included.
    
-   Attributes that are declared in component interfaces can now be specified after the addition DATA VALUES by using [alias names](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry").