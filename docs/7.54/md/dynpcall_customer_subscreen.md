  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengui_obsolete.htm) →  [Obsolete statements of the screen flow logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_obsolet.htm) → 

CALL CUSTOMER SUBSCREEN

Obsolete Syntax

CALL CUSTOMER SUBSCREEN sub\_area INCLUDING prog dynnr.

Effect

Like the corresponding variant of [CALL SUBSCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpcall.htm), with the difference that the subscreen dynpro is only included if it was activated in transaction CMOD as an enhancement. In addition, the program name prog must be specified as a literal and begin with SAPLX (the subscreen dynpro must be a component of a function group beginning with "X").

Note

The execution of enhancements using transaction CMOD is now obsolete. Instead, the new [enhancement concept](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_concept_glosry.htm "Glossary Entry") should be used.