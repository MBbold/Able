const DetailActionTitle = (data)=>{

    let actionTitle = ""
    if(data.actionBar.title =='editNews')  actionTitle ='Мэдээ заслаа'; else
							                    if(data.actionBar.title =='addNews')  actionTitle ='Мэдээ нэмлээ'; else
							                    if(data.actionBar.title =='editForum')  actionTitle ='Хэлэлцүүлэг заслаа'; else
							                    if(data.actionBar.title =='editFile')  actionTitle ='Файл заслаа'; else
							                    if(data.actionBar.title =='addFile')  actionTitle ='Файл нэмлээ'; else
							                    if(data.actionBar.title =='addImage')  actionTitle ='Зураг нэмлээ'; else
							                    if(data.actionBar.title =='editImage')  actionTitle ='Зураг заслаа'; else
							                    if(data.actionBar.title =='editVote')  actionTitle ='Санал асуулга заслаа'; else
							                    if(data.actionBar.title =='addComment' && data.pro !='docs')  actionTitle ='Сэтгэгдэл нэмлээ'; else
							                    if((data.actionBar.title =='addComment' && data.pro =='docs') || data.actionBar.title =='comment')  actionTitle ='Тэмдэглэл нэмлээ'; else
							                    if(data.actionBar.title =='deleteComment' && data.pro !='docs')  actionTitle ='Сэтгэгдэл устгалаа'; else
							                    if(data.actionBar.title =='deleteComment' && data.pro =='docs')  actionTitle ='Тэмдэглэл устгалаа'; else
							                    if(data.actionBar.title =='addPlus')  actionTitle ='Дэмжлээ'; else
							                    if(data.actionBar.title =='addMail')  actionTitle ='Захидал илгээлээ'; else
							                    if(data.actionBar.title =='addComplain')  actionTitle ='Өргөдөл шилжүүллээ'; else
							                    if(data.actionBar.title =='addReceived')  actionTitle ='Бичиг шилжүүллээ'; else
							                    if(data.actionBar.title =='addTimeRequest')  actionTitle ='Хүсэлтийг шилжүүллээ'; else
							                    if(data.actionBar.title =='innerDecision')  actionTitle ='Дотоод тушаал шийдвэр илгээлээ'; else
							                    if(data.actionBar.title =='aboveDecision')  actionTitle ='Дээд тушаал шийдвэр илгээлээ'; else
							                    if(data.actionBar.title =='addMeeting')  actionTitle ='Хурал нэмлээ'; else
							                    if(data.actionBar.title =='addAgenda')  actionTitle ='Хэлэлцэх асуудал нэмлээ'; else
							                    if(data.actionBar.title =='editAgenda')  actionTitle ='Хэлэлцэх асуудал шинэчиллээ'; else
							                    if(data.actionBar.title =='deleteAgenda')  actionTitle ='Хэлэлцэх асуудал устгалаа'; else
							                    if(data.actionBar.title =='convert')  actionTitle ='Хурлын тэмдэглэл хөрвүүллээ'; else
							                    if(data.actionBar.title =='approveTimeRequest')  actionTitle ='Хүсэлтийг баталлаа'; else
							                    if(data.actionBar.title =='cancelTimeRequest')  actionTitle ='Хүсэлтийг цуцаллаа'; else
							                    if(data.actionBar.title =='cardClose' && data.module =='complain')  actionTitle ='Өргөдлийг хаалаа'; else
							                    if(data.actionBar.title =='cardClose' && data.module =='received')  actionTitle ='Бичгийг хаалаа'; else
							                    if(data.actionBar.title =='cancelShift')  actionTitle ='Шилжүүлгийг цуцаллаа'; else
							                    if(data.actionBar.title =='shift' && (data.module =='inner' || data.module =='above'))  actionTitle ='Тушаал шийдвэр шилжүүллээ'; else
							                    if(data.actionBar.title =='restoreCloseCard')  actionTitle ='Хаалтыг цуцаллаа'; else
							                    if(data.actionBar.title =='addAnswer')  actionTitle ='Санал өглөө';
                                                return actionTitle
}
export default DetailActionTitle;
