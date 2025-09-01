  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20transactional%20phase%2C%20ABENTR_PHASE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

transactional phase

Specifies the concrete phase of a [transaction](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry"). It is either the modify or the save transactional phase. They are set either implicitly, as in the case of, for example, [RAP handler](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") and [saver](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") methods, or explicitly using the static methods of class [CL\_ABAP\_TX](javascript:call_link\('abaprap_cl_abap_tx.htm'\)).

In a [RAP transaction](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry"), the transactional phases are as follows:

-   Modify: Includes the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry") and the [early save phase](javascript:call_link\('abenearly_rap_save_phase_glosry.htm'\) "Glossary Entry") of the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry").
-   Save: Includes the [RAP late save phase](javascript:call_link\('abenlate_rap_save_phase_glosry.htm'\) "Glossary Entry").