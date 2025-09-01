  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [dynpro - Obsolete Statements in Dynpro Flow Logic](javascript:call_link\('abendynpro_obsolet.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - CALL CUSTOMER SUBSCREEN, DYNPCALL_CUSTOMER_SUBSCREEN, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - CALL CUSTOMER SUBSCREEN

Obsolete Syntax

CALL CUSTOMER SUBSCREEN sub\_area INCLUDING prog dynnr.

Effect

Like the corresponding variant of [CALL SUBSCREEN](javascript:call_link\('dynpcall.htm'\)), with the difference that the subscreen dynpro is only included if it was activated in transaction CMOD as an enhancement. In addition, the program name prog must be specified as a literal and begin with SAPLX (the subscreen dynpro must be a component of a function pool beginning with X).

Hint

The execution of enhancements using transaction CMOD is now obsolete. Instead, the [ABAP Enhancement Framework](javascript:call_link\('abenenhancement_framework_glosry.htm'\) "Glossary Entry") should be used.