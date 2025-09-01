  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Contexts (Obsolete)](javascript:call_link\('abencontext.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CONTEXTS, ABAPCONTEXTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for i
mprovement:)

CONTEXTS

[Short Reference](javascript:call_link\('abapcontexts_shortref.htm'\))

Obsolete Syntax

CONTEXTS con.

Effect

This statement can be specified in the global declaration part of a program or in the local declaration part of a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"). It creates a structured local data type, which can be used to create an instance of the [context](javascript:call_link\('abencontext_glosry.htm'\) "Glossary Entry") con. For con, the name of a context defined in the current [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") can be specified. The name of the new data type consists of the prefix context\_ and the name con of the specified context.

If the data type context\_con created using CONTEXTS is used after the [addition TYPE](javascript:call_link\('abapdata_simple.htm'\)) of the statement [DATA](javascript:call_link\('abapdata.htm'\)), an instance of the context con is created to which the declared data object points. The data object cannot be declared as a component of a structure. The content of the new data object is interpreted as a reference. After an assignment to another data object of the same data type, this data object points to the same context instance.

In addition to the data type context\_con, another structured data type context\_t\_con is created. For each field of the context, this data type contains an identically named component with its data type.

Hint

Data objects declared with the data type context\_con should only be used in the statements [SUPPLY](javascript:call_link\('abapsupply.htm'\)) and [DEMAND](javascript:call_link\('abapdemand.htm'\)).