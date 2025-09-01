  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [Obsolete statements of the screen flow logic](javascript:call_link\('abendynpro_obsolet.htm'\)) → 

CALL CUSTOMER SUBSCREEN

Obsolete Syntax

CALL CUSTOMER SUBSCREEN sub\_area INCLUDING prog dynnr.

Effect

Like the corresponding variant of [CALL SUBSCREEN](javascript:call_link\('dynpcall.htm'\)), with the difference that the subscreen dynpro is only included if it was activated in transaction CMOD as an enhancement. In addition, the program name prog must be specified as a literal and begin with SAPLX (the subscreen dynpro must be a component of a function group beginning with "X").

Note

The execution of enhancements using transaction CMOD is now obsolete. Instead, the new [enhancement concept](javascript:call_link\('abenenhancement_concept_glosry.htm'\) "Glossary Entry") should be used.