  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

BAdI interface

A BAdI interface is a global [interface](javascript:call_link\('abeninterface_oo_glosry.htm'\) "Glossary Entry") that integrates the [tag interface](javascript:call_link\('abentag_interface_glosry.htm'\) "Glossary Entry") IF\_BADI\_INTERFACE. A BAdI interface can be used as a part of the definition of one or more [BAdIs](javascript:call_link\('abenbadi_glosry.htm'\) "Glossary Entry"), and may only contain [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") ([BAdI methods](javascript:call_link\('abenbadi_method_glosry.htm'\) "Glossary Entry")) and [events](javascript:call_link\('abenevent_glosry.htm'\) "Glossary Entry"), but not variable [attributes](javascript:call_link\('abenattribute_glosry.htm'\) "Glossary Entry"). In addition, a BAdI interface cannot contain any [component interfaces](javascript:call_link\('abencomponent_interface_glosry.htm'\) "Glossary Entry") apart from other BAdI interfaces. An interface that integrates a BAdI interface is also a BAdI interface.