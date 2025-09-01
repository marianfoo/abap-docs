  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

package

A package encapsulates [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") in self-contained units. Packages are themselves repository objects and connect the repository objects they contain to the [Change and Transport System (CTS)](javascript:call_link\('abencts_glosry.htm'\) "Glossary Entry"). The components of a package that can be used outside of the package must be published in a package interface. A package that accesses the repository objects of another package must declare this and have permission from the other package. Packages are created using [Package Builder](javascript:call_link\('abenpackage_builder_glosry.htm'\) "Glossary Entry"). See also [Package Concept](javascript:call_link\('abenpackage_concept_glosry.htm'\) "Glossary Entry").