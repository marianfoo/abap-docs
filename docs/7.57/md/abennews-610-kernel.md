  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 6.xx](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-6.htm) →  [News for Release 6.10](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-610.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Runtime and Load Size in Release 6.10, ABENNEWS-610-KERNEL, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Runtime and Load Size in Release 6.10

[1\. Restrictions on the Statement STOP](#!ABAP_MODIFICATION_1@1@)
[2\. Addition ON ROLLBACK for Subroutines](#!ABAP_MODIFICATION_2@2@)
[3\. Overwriting of Untyped Field Symbols](#!ABAP_MODIFICATION_3@3@)
[4\. Number of Global Segments](#!ABAP_MODIFICATION_4@4@)
[5\. Passing of c Literals to Numeric Parameters](#!ABAP_MODIFICATION_5@5@)
[6\. c Literals as Default Values for Parameters of Type p](#!ABAP_MODIFICATION_6@6@)
[7\. Paging Out of the Structure SCREEN](#!ABAP_MODIFICATION_7@7@)
[8\. Syntax Revisions in LOOP AT SCREEN and MODIFY SCREEN](#!ABAP_MODIFICATION_8@8@)

Modification 1   

Restrictions on the Statement STOP

The statement [STOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstop.htm) can no longer be used outside of reports or in [dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") called using [CALL SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_screen.htm). Such actions previously produced a runtime error or, in rarer cases, a non-traceable program flow.

Modification 2   

Addition ON ROLLBACK for Subroutines

The addition [ON ROLLBACK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapperform.htm) is now available for subroutines, similar to PERFORM ... ON COMMIT. This stops FORM routines of this type from being executed until a [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprollback.htm) or a [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm) of type A is raised.

Modification 3   

Overwriting of Untyped Field Symbols

Untyped field symbols no longer lose their ready-only status when being read for the first time. Also, the fields %\_DUMMY and %\_SPACE are now constants.

Modification 4   

Number of Global Segments

The number of global segments in the program memory is now unrestricted. Previously, a maximum of 2\*\*15 global segments was allowed.

Modification 5   

Passing of c Literals to Numeric Parameters

When passing c literals to parameters of type p, it was previously possible for a number to have more [decimal places](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendecimal_place_glosry.htm "Glossary Entry") than the formal parameter. Due to rounding and the associated loss of information loss, the passing of c literals to parameters of types I, INT1, and INT2 also caused problems. For example, the literal '1245.6789' could be passed to a formal parameter of type p DECIMALS 2 or type i, and the rounding was performed in accordance with the associated [conversion rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_rule_glosry.htm "Glossary Entry").

Now the system ensures that the formal parameter has as large as a fractional portion as required by the literal. In the case of programs without fixed point arithmetic, the size of the fractional portion must be an exact match.

Modification 6   

c Literals as Default Values for Parameters of Type p

If, in the case of generic parameters of type p, a c literal is specified as the default value (for example in the form '12.345'), a field of type p with Decimals 0 was created and the literal value converted to this field. This could also result in information loss due to rounding.

Now a field of type p is created with as many decimal places as specified in the literal. For example, for a c literal with the value '12.345', a P field with Decimals 3 is created.

Modification 7   

Paging Out of the Structure SCREEN

Until now the structure of the data object SCREEN was generated automatically in every program. In Release 6.10 this structure description was paged out into the [type pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype-pools.htm) SYSCR. Instead of

data NAME type %\_CX\_SCREEN-Name

the code should now be

data NAME type SYSCR\_SCREEN-NAME

Modification 8   

Syntax Revisions in LOOP AT SCREEN and MODIFY SCREEN

The following changes were made to the statements [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_screen.htm) and [MODIFY SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_screen.htm).

1.  To ensure independence from global definitions, the additional variants LOOP AT SCREEN INTO wa and MODIFY SCREEN FROM wa were introduced.
2.  LOOP AT SCREEN with an internal table SCREEN defined locally in the program is no longer possible. The following program, previously not terminated until runtime, now produces a syntax error:

PROGRAM loop\_test.
PERFORM test.
FORM test.
  DATA screen TYPE STANDARD TABLE OF spfli.
  LOOP AT SCREEN.
  ENDLOOP.
ENDFORM.