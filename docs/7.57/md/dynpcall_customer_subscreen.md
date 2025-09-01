  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengui_obsolete.htm) →  [dynpro - Obsolete Statements in Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_obsolet.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - CALL CUSTOMER SUBSCREEN, DYNPCALL_CUSTOMER_SUBSCREEN, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - CALL CUSTOMER SUBSCREEN

Obsolete Syntax

CALL CUSTOMER SUBSCREEN sub\_area INCLUDING prog dynnr.

Effect

Like the corresponding variant of [CALL SUBSCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpcall.htm), with the difference that the subscreen dynpro is only included if it was activated in transaction CMOD as an enhancement. In addition, the program name prog must be specified as a literal and begin with SAPLX (the subscreen dynpro must be a component of a function pool beginning with X).

Hint

The execution of enhancements using transaction CMOD is now obsolete. Instead, the [ABAP Enhancement Framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_framework_glosry.htm "Glossary Entry") should be used.